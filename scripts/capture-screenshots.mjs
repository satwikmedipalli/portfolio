import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * settleMs: extra wait after the page loads (3D scenes and animations need it).
 * anchor:   optional section id to scroll to before the shot, e.g. "#scoreboard".
 * waitUntil: "load" starts the clock as soon as the page loads, for timed animations
 *            (default "networkidle" waits for all network traffic to stop).
 */
const projects = [
  { id: "shapeshift", url: "https://baseball.satwikmedipalli.dev", waitUntil: "load", settleMs: 2000 },
  { id: "casino", url: "https://casino.satwikmedipalli.dev", settleMs: 4000 },
  { id: "gridiron", url: "https://football.satwikmedipalli.dev", settleMs: 3000 },
];

// Usage: npm run screenshots            -> all projects
//        npm run screenshots -- casino  -> just one
const only = process.argv.slice(2);
const outDir = path.join(__dirname, "../public/projects");

// Free hosts (Render) show a "service waking up" page on a cold start.
const COLD_START = /SERVICE WAKING UP|APPLICATION LOADING|INCOMING HTTP REQUEST/i;

async function waitUntilAwake(page, url) {
  const deadline = Date.now() + 150_000;
  while (Date.now() < deadline) {
    const text = await page.innerText("body").catch(() => "");
    if (!COLD_START.test(text)) return true;
    console.log("  server is waking up, waiting...");
    await page.waitForTimeout(8000);
    await page.goto(url, { waitUntil: "networkidle", timeout: 90_000 }).catch(() => {});
  }
  return false;
}

async function capture() {
  fs.mkdirSync(outDir, { recursive: true });

  // A real (headed) browser window uses the Mac's GPU, so 3D scenes render
  // properly instead of the blocky software fallback that headless mode uses.
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });

  for (const project of projects) {
    if (only.length && !only.includes(project.id)) continue;
    const page = await context.newPage();
    console.log(`Capturing ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: project.waitUntil ?? "networkidle", timeout: 90_000 });
      if (!(await waitUntilAwake(page, project.url))) {
        throw new Error("server never woke up; try again in a minute");
      }
      if (project.anchor) {
        await page.locator(project.anchor).scrollIntoViewIfNeeded();
      }
      await page.waitForTimeout(project.settleMs ?? 2000);
      const out = path.join(outDir, `${project.id}.png`);
      await page.screenshot({ path: out, fullPage: false });
      console.log(`  saved ${out}`);
    } catch (err) {
      console.error(`  FAILED ${project.id}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
}

capture();
