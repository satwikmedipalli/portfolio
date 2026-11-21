const words = [
  "Python",
  "TypeScript",
  "SQL",
  "PostgreSQL",
  "DuckDB",
  "Django",
  "FastAPI",
  "Next.js",
  "React",
  "Node.js",
  "WebSockets",
  "Docker",
  "GitHub Actions",
  "Supabase",
  "Electron",
  "pandas",
  "scikit-learn",
  "Statcast",
  "nflverse",
  "SEC EDGAR",
];

export function Marquee() {
  const text = words.join(" · ") + " · ";
  return (
    <div className="pointer-events-none absolute inset-x-0 top-24 overflow-hidden md:top-32">
      <div className="animate-marquee-slow hypnosis-marquee whitespace-nowrap font-mono text-5xl font-medium uppercase tracking-wider text-[#3d5a47]/[0.06] md:text-7xl">
        {text.repeat(4)}
      </div>
    </div>
  );
}
