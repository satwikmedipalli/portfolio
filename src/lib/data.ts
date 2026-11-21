export const siteConfig = {
  name: "Satwik Medipalli",
  brand: "Satwik.",
  title: "Software Engineer · Data & Real-Time Systems",
  heroImage: {
    src: "/hero-view.jpg",
    alt: "Snow covered alpine peaks above a sea of clouds at sunrise",
    caption: "Clean data. Clear view.",
  },
  location: "Livingston, NJ",
  email: "satwik.medipalli@gmail.com",
  phone: "945 544 2418",
  linkedin: "https://linkedin.com/in/medipalli-satwik",
  github: "https://github.com/satwikmedipalli",
  calendarUrl: "https://cal.com/medipalli-satwik-6qoa0v/15min",
  calendarLabel: "book 15 min with me →",
  resume: {
    href: "/Satwik_Medipalli_Resume.pdf",
    filename: "Satwik_Medipalli_Resume.pdf",
    label: "download my resume",
  },
  summary:
    "Software Engineer at Aagna, where I built Aagna Markets, a live markets news and data site, end to end. UT Dallas MS Business Analytics (May 2026) and three internships. On the side I study baseball and football with public data and build real-time apps. Livingston, NJ.",
};

export const stats = [
  { label: "Statcast pitches studied", value: "4.8M", status: "online" as const },
  { label: "Prediction markets tracked", value: "270K", status: "online" as const },
  { label: "Internships", value: "3", status: "online" as const },
  { label: "Card games, one engine", value: "11", status: "online" as const },
];

export type Project = {
  id: string;
  name: string;
  question: string;
  description: string;
  highlights: string[];
  discipline: string[];
  stack: string[];
  /** Omitted for apps with no public demo. */
  url?: string;
  /** Short status line on the card, e.g. "Live on Render". */
  meta?: string;
  github?: string;
  /** Show an "email me about it" link instead of code links. */
  contact?: boolean;
  featured?: boolean;
  span?: "default" | "wide";
  accent: string;
  screenshot?: string;
};

const GH = "https://github.com/satwikmedipalli";
const SHAPESHIFT_URL = "https://baseball.satwikmedipalli.dev";
const CASINO_URL = "https://casino.satwikmedipalli.dev";
const FOOTBALL_URL = "https://football.satwikmedipalli.dev";

export const projects: Project[] = [
  {
    id: "shapeshift",
    name: "ShapeShift",
    question: "Which offseason pitch redesigns actually work?",
    description:
      "Every winter, pitchers rebuild pitches in pitch labs. ShapeShift measures what those changes did once the season started. It uses every public Statcast pitch from 2020 to 2026 and compares each redesigned pitch with closely matched pitches that did not change.",
    highlights: [
      "4.8M Statcast pitches in DuckDB. 1,054 redesigns found without looking at results, each matched to the 5 closest unchanged pitches",
      "Added velocity is the change that reliably pays: +0.76 runs saved per 100 pitches (q = 0.016). More ride shows no average effect",
      "Pre-trend check, 200 placebo runs (p < 0.005), held-out 2024 to 2026 seasons, and simulations that confirm the estimator is unbiased",
    ],
    discipline: ["Sports Analytics", "Causal Inference", "Data Engineering"],
    stack: ["Python", "DuckDB", "pandas", "scikit-learn", "SciPy", "pybaseball", "Next.js"],
    url: SHAPESHIFT_URL,
    meta: "Live on Vercel",
    github: `${GH}/baseball`,
    featured: true,
    span: "wide",
    accent: "#8d1f2f",
    screenshot: "/projects/shapeshift.png",
  },
  {
    id: "gridiron",
    name: "Gridiron",
    question: "Does the NFL combine tell you anything the draft slot doesn't?",
    description:
      "NFL analysis on public nflverse data. It ranks every team by expected points added, grades fourth-down calls with a transparent expected-points model, and tests whether combine results predict careers better than where a player was drafted.",
    highlights: [
      "The combine adds nothing beyond draft slot: 0.794 held-out AUC with pick and position, 0.791 with every drill added",
      "Fourth-down model compares going for it, kicking and punting, fitted on 2018 to 2025 play-by-play",
      "Team ranks by EPA per play, success rate and pass rate over expected. Every number is regenerated from the pipeline",
    ],
    discipline: ["Sports Analytics", "Machine Learning"],
    stack: ["Python", "pandas", "Polars", "scikit-learn", "nflverse", "TypeScript"],
    url: FOOTBALL_URL,
    meta: "Live",
    github: `${GH}/football`,
    featured: true,
    accent: "#1a4d3e",
    screenshot: "/projects/gridiron.png",
  },
  {
    id: "casino",
    name: "Casino",
    question:
      "What if our home poker game could keep going after everyone moved to different cities?",
    description:
      "Poker and blackjack for a group of friends, on their phones. One person hosts a table, everyone joins with a 4-letter code, and the dealer picks one of 11 games each hand, including the house rules my friends actually play.",
    highlights: [
      "The server deals every hand. Each phone receives only its own cards, so nobody can read another hand from the browser",
      "One hand evaluator for all 11 variants: wild cards, Omaha rules, and high-low split pots",
      "Tests let bots play 200 hands of every game and check that chips are never created or lost",
    ],
    discipline: ["Full stack", "Real time"],
    stack: ["TypeScript", "React", "Vite", "Node.js", "WebSockets"],
    url: CASINO_URL,
    meta: "Live on Render",
    github: `${GH}/casino`,
    featured: true,
    accent: "#0f3d2e",
    screenshot: "/projects/casino.png",
  },
  {
    id: "endgame",
    name: "Endgame",
    question: "What if your daily feed actually ended?",
    description:
      "A personal Mac app that replaces doomscrolling with one daily paper: real news, coding and stock-market lessons, history, chess, Italian, a sudoku and a mini crossword. Every card is Done or Skip. When they are all cleared, the app tells you to close the laptop.",
    highlights: [
      "38 stories a day from 22 RSS feeds, with duplicates merged, opinion pieces dropped, and each card written only from its sources",
      "The window never calls an AI model. It queues jobs in Supabase, and a helper picks them up over Realtime and runs Claude Code on the same Mac",
      "Chess drills from my own Chess.com games checked with Stockfish, spaced-repetition Italian, and row-level security on every table",
    ],
    discipline: ["Full stack", "AI Engineering", "Desktop"],
    stack: ["Electron", "React", "TypeScript", "Supabase", "Claude Code", "MCP", "GitHub Actions"],
    meta: "Personal Mac app",
    contact: true,
    accent: "#1c3a32",
    screenshot: "/projects/endgame.png",
  },
  {
    id: "wellness",
    name: "Wellness",
    question: "Can one app run my routine, my health and my spending?",
    description:
      "A personal Mac app in a spreadsheet style. Day plans built from timed blocks, a food log with calories and macros, workouts, and spending by category, with this week and this month side by side.",
    highlights: [
      "Day plans with task and free-time blocks, a daily checklist with a NOW marker, and a log that scores every planned day",
      "Food, workouts and spending tracked against daily and weekly targets",
      "Syncs through Supabase, and a Claude connector logs food, spending and plans for me",
    ],
    discipline: ["Full stack", "Desktop"],
    stack: ["Electron", "JavaScript", "Supabase", "MCP"],
    meta: "Personal Mac app",
    contact: true,
    accent: "#3d5a47",
    screenshot: "/projects/wellness.png",
  },
];

export type ExperiencePhase = {
  title: string;
  description: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  question: string;
  /** Tag on the card. Defaults to "Internship". */
  kind?: string;
  logo?: string;
  context?: string;
  product?: string;
  phases?: ExperiencePhase[];
  stack?: string[];
  github?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "aagna",
    company: "Aagna",
    role: "Software Engineer",
    period: "Oct 2026 to Present",
    kind: "Current role",
    question:
      "What does it take to give investors market data they can trust, live?",
    logo: "/logos/aagna.png",
    product: "Markets",
    context:
      "Aagna is a fintech startup. I started on the financial data layer and now build Aagna Markets (aagna.news), a public markets news and data site with live stock and ETF prices, company pages, an earnings and filings calendar, and prediction-market odds. I built it end to end across three repositories, working through Jira tickets and pull-request review.",
    phases: [
      {
        title: "Architecture",
        description:
          "Split the product into three services: data ingestion with a read-only Data API over Postgres, a Django backend, and a Next.js front end, each in its own Docker container. Wrote a versioned API contract (TypeScript types, OpenAPI and a WebSocket spec, now at version 8) that a CI check enforces, so the two sides cannot drift apart.",
      },
      {
        title: "Live prices",
        description:
          "One upstream connection to the market-data vendor (Unusual Whales) fans out to every browser through the backend's WebSocket, so the vendor key never reaches a browser. It switches between polling, the vendor's direct stream and a private feed from the Data service, and screens licensing on what can be shown publicly.",
      },
      {
        title: "Prediction markets and chart data",
        description:
          "Added Polymarket to the data hub: an hourly top-2,000 job and a daily full-catalogue job with keyset paging (about 3.6 minutes and 790 MB per run), covering about 20,600 events and 270,000 open markets. Built chart data covering up to 20,000 trading sessions of candles.",
      },
      {
        title: "Front end",
        description:
          "Built a TradingView-style price chart (5-minute to monthly candles, crosshair read-out, zoom, full screen), sector heatmaps, prediction-market cards, the earnings and filings calendar, a live headline feed, and an index-ETF strip with live hover charts.",
      },
      {
        title: "Finding the delay",
        description:
          "Built probes that compare the vendor's raw stream with what the public site delivers. The vendor delivered in 0.09 s; the site averaged 1.6 s with 5 to 12 s stalls. Proved the stalls came from the internal relay, not the vendor, and cut the batching delay from 0.66 s to 0.24 s in tests.",
      },
      {
        title: "iOS prototype",
        description:
          "Wrapped the live site in an iOS app (Capacitor 7, Swift) with a native launch screen, pull to refresh, swipe-back navigation and an offline screen.",
      },
      {
        title: "Before Markets: the financial data pipeline",
        description:
          "Built the Python pipeline loading SEC EDGAR XBRL filings, Tiingo, FINRA and OpenFIGI into SQLite and Postgres. Built share-class-weighted market cap (Berkshire Hathaway from $741B to the correct $1.14T), cut data gaps on the 50-company test set from 125 to 69, grew the test suite from 748 to 1,375 passing tests, and shipped 36 fixes from a full code review.",
      },
      {
        title: "Macro data and vendor evaluation",
        description:
          "Built a Fed and macro dataset from public sources (FOMC projections and dot plots, Treasury yields, CPI, GDP, FRED) and compared market-data vendors on coverage, price history and redistribution rights for the final vendor decision.",
      },
    ],
    stack: [
      "Python",
      "Django",
      "django-ninja",
      "PostgreSQL",
      "TypeScript",
      "Next.js",
      "React",
      "WebSockets",
      "Docker",
      "GitHub Actions",
      "pytest",
      "SEC EDGAR",
    ],
    bullets: [
      "Built Aagna Markets end to end: a Data API, a Django backend with a live-price WebSocket, and a Next.js front end, held together by a versioned API contract checked in CI",
      "Sent one vendor price stream to every browser, then traced 5 to 12 s stalls to the internal relay and cut batching delay from 0.66 s to 0.24 s in tests",
      "Added prediction-market data covering about 20,600 events and 270,000 open markets",
      "Before Markets, built the SEC EDGAR data pipeline: fixed Berkshire's market cap from $741B to $1.14T and grew tests from 748 to 1,375",
    ],
  },
  {
    id: "dfw-technology",
    company: "DFW Technology",
    role: "AI Researcher (UTD Client Project)",
    period: "Jan 2026 to May 2026",
    kind: "Client project",
    question:
      "When should a mid-market company run private AI or small models instead of defaulting to a full LLM?",
    context:
      "Semester-long UTD educational engagement on-site at DFW Technology. College-connected client project designed like real client work: research, write, and deliver recommendations the company could actually use.",
    product: "Private AI + SLM playbooks",
    bullets: [
      "Authored Public vs Private AI: Scalable Business Agents for SMEs on architecture, governance, and compliance",
      "Authored When to Use Small Language Models: A Strategic Playbook with a Unit of Work pilot measuring >90% inference-cost reduction vs LLM-only",
    ],
    stack: ["Private AI", "SLMs", "Cost modeling", "Governance"],
  },
  {
    id: "boltzmann-labs",
    company: "Boltzmann Labs",
    role: "AI Research Intern",
    period: "Jan 2024 to Apr 2024",
    question:
      "What if you could spot cancer signals in single cell data before they fully show up?",
    logo: "/logos/boltzmann.png",
    product: "BoltBio",
    context:
      "Boltzmann Labs is a bioinformatics company working with protein, bulk RNA, and single cell data. The core goal: detect cancerous cell signals early, before they fully manifest, through rigorous multi omic analysis.",
    phases: [
      {
        title: "Competitive research",
        description:
          "First two weeks: mapped companies in the same space and studied how they structure omics analysis pipelines, what they automate, what they measure, and how they surface biological signal from raw data.",
      },
      {
        title: "Pipeline architecture",
        description:
          "After understanding why differential analysis and enrichment matter for early cancer detection, I evaluated automation tools and stack options, then designed the pipeline architecture best suited for Boltzmann's workflow.",
      },
      {
        title: "BoltBio backend",
        description:
          "Built the end to end single cell analysis pipeline in Python: QC filtering, library size normalization, differential analysis via t test and p values, and Gene Set Enrichment Analysis (GSEA) to surface significant gene populations across 500K+ records.",
      },
      {
        title: "Deployment",
        description:
          "Containerized the workflow with Docker, wired S3 ingest and export via boto3, and generated Matplotlib/Seaborn visualizations with KMeans clustering: heatmaps, p value charts, and enrichment plots uploaded back to the boltbio S3 bucket.",
      },
    ],
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SciPy",
      "scikit learn",
      "Matplotlib",
      "Seaborn",
      "boto3",
      "AWS S3",
      "Docker",
      "GSEA",
    ],
    bullets: [
      "Built a multi-omic analysis pipeline over millions of records using clustering, differential expression, and GSEA to prioritize cancer-linked cell populations",
      "Containerized and deployed with Docker, FastAPI, and Kubernetes, cutting researcher setup from hours to minutes",
    ],
  },
  {
    id: "bostonlogix",
    company: "Bostonlogix",
    role: "Data Analytics Intern",
    period: "Aug 2023 to Dec 2023",
    question:
      "How do you turn messy recipe sheets and millions of rows into something a burger chain can actually use?",
    logo: "/logos/bostonlogix.png",
    product: "Hungry Jack's",
    context:
      "Bostonlogix was supporting Hungry Jack's, a major burger chain in Australia. I worked across database migration, executive KPI reporting, Azure OpenAI recipe extraction, and API test cleanup for a high volume client data stack.",
    phases: [
      {
        title: "MongoDB to SQL Server migration",
        description:
          "Migrated 1M+ Hungry Jack's records from MongoDB into SQL Server with Python so analytics could run on structured tables, then validated counts and joins.",
      },
      {
        title: "Bold BI KPI dashboards",
        description:
          "Built Bold BI dashboards on the structured data so the client could monitor KPIs without waiting on manual extracts.",
      },
      {
        title: "Recipe ingredient bot",
        description:
          "Benchmarked Azure OpenAI against classical NLP for extracting ingredients and quantities from ~100K unstructured Hungry Jack's recipes. The team adopted the LLM path in production.",
      },
      {
        title: "API cleanup and inventory",
        description:
          "Diagnosed and fixed 100+ failing API test cases in Postman, added auth and daily scheduled runs, documented APIs in Swagger, and presented the regression suite for release testing.",
      },
    ],
    stack: [
      "Python",
      "OpenAI",
      "Azure OpenAI",
      "SQL Server",
      "MongoDB",
      "Bold BI",
      "Postman",
      "Swagger",
    ],
    bullets: [
      "Migrated 1M+ Hungry Jack's records from MongoDB to SQL Server and built Bold BI dashboards",
      "Benchmarked Azure OpenAI vs classical NLP on 100K recipes; team adopted the LLM path in production",
      "Fixed 100+ failing Postman API tests, added auth, daily runs, and Swagger docs",
    ],
  },
  {
    id: "ideabytes",
    company: "Ideabytes",
    role: "BI Developer Intern",
    period: "Apr 2023 to Jul 2023",
    question:
      "How do you monitor thousands of IoT devices across India and know which ones will fail next?",
    logo: "/logos/ideabytes.png",
    product: "Remote Monitoring System",
    context:
      "Ideabytes is an IoT company tracking telemetry from wireless data loggers and industrial sensors deployed across India. Each site runs different devices, so the data arrived as nested JSON from a live API.",
    phases: [
      {
        title: "JSON API ingestion",
        description:
          "First task: connect to the company's JSON API and pull unstructured IoT device data into Power BI. Learned how JSON payloads map to API responses and built the ingestion flow that fed the analytics layer.",
      },
      {
        title: "Data cleaning in Power BI",
        description:
          "Telemetry lived inside nested lists across regions and devices. I flattened and cleaned the schema in Power BI so readings, alerts, and device metadata became usable tables.",
      },
      {
        title: "Website dashboard deployment",
        description:
          "Built the Remote Monitoring System dashboard in Power BI and deployed it as the live frontend on the Ideabytes company website. Presented the dashboard directly to the CEO.",
      },
      {
        title: "Linear regression forecasting",
        description:
          "Built a Python linear regression pipeline on monthly device metrics to forecast 12 months ahead: which devices are performing well today, which could improve, and which may show errors soon.",
      },
      {
        title: "ARIMA time series model",
        description:
          "Upgraded to ARIMA for the same one year horizon to capture seasonality and drift in device performance, shifting maintenance planning from reactive to scheduled.",
      },
    ],
    stack: [
      "Python",
      "Power BI",
      "Pandas",
      "scikit learn",
      "statsmodels",
      "ARIMA",
      "JSON APIs",
    ],
    bullets: [
      "Built live Power BI dashboards from IoT JSON APIs for the CEO and company website",
      "Forecasted one-year performance across 100+ IoT sensors with ARIMA in Python",
    ],
  },
];

export type SkillOffer = {
  id: string;
  prompt: string;
  title: string;
  blurb: string;
  skills: string[];
};

export const skillOffers: SkillOffer[] = [
  {
    id: "skills-sports",
    prompt: "You want answers you can defend in a front office?",
    title: "Sports analytics",
    blurb:
      "Matched studies, held-out tests and placebo checks on Statcast and nflverse data. The methods behind ShapeShift and Gridiron.",
    skills: [
      "Causal inference",
      "Propensity matching",
      "Bootstrap intervals",
      "Logistic regression",
      "Statcast",
      "nflverse",
      "DuckDB",
    ],
  },
  {
    id: "skills-market",
    prompt: "You need market data that is right and on time?",
    title: "Market data",
    blurb:
      "Live prices over WebSockets, filings parsed from XBRL, and prediction markets at scale. What I build at Aagna.",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "WebSockets",
      "SEC EDGAR XBRL",
      "Polymarket",
      "Unusual Whales",
    ],
  },
  {
    id: "skills-fullstack",
    prompt: "You want one person who can build it end to end?",
    title: "Full stack and real time",
    blurb:
      "From the database to the screen, including the parts that have to update live.",
    skills: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Electron",
      "Supabase",
      "Docker",
    ],
  },
  {
    id: "skills-languages",
    prompt: "You want to know what I write in?",
    title: "Languages",
    blurb:
      "Python for data and backends. SQL when the truth lives in the database. TypeScript when it needs a face. R when the stats need a second opinion.",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "R"],
  },
];

export type ContactInquiry = {
  id: string;
  question: string;
  title: string;
  meta: string;
  blurb: string;
};

export const contactInquiries: ContactInquiry[] = [
  {
    id: "contact-talk",
    question: "You made it to the bottom. Should we just talk?",
    title: "Let's talk",
    meta: "Open to opportunities",
    blurb:
      "If you are hiring, or just want to talk about something on this site, email me. I respond fast.",
  },
];

export const education = {
  school: "University of Texas at Dallas",
  degree: "MS Business Analytics",
  period: "May 2026",
  location: "Richardson, TX",
};

export type ProofItem = {
  id: string;
  name: string;
  hook: string;
  url: string;
  /** Badge on the card, e.g. "Live" or "Code". */
  label: string;
  screenshot?: string;
};

/** Three projects shown under the hero so proof hits before the scroll. */
export const heroProof: ProofItem[] = [
  {
    id: "shapeshift",
    name: "ShapeShift",
    hook: "Which pitch redesigns work? A matched study of 4.8M Statcast pitches.",
    url: SHAPESHIFT_URL,
    label: "Live",
    screenshot: "/projects/shapeshift.png",
  },
  {
    id: "gridiron",
    name: "Gridiron",
    hook: "The NFL combine adds nothing beyond draft slot: 0.794 vs 0.791 AUC.",
    url: FOOTBALL_URL,
    label: "Live",
    screenshot: "/projects/gridiron.png",
  },
  {
    id: "casino",
    name: "Casino",
    hook: "Real-time poker and blackjack. The server deals, and your phone sees only your cards.",
    url: CASINO_URL,
    label: "Live",
    screenshot: "/projects/casino.png",
  },
];

export const recruiterMemo: {
  preface: string;
  forwardBlurb: string;
  caseLine: string;
  whyNow: string;
  proof: ProofItem[];
} = {
  preface:
    "You made it to Recruiter Mode, the one-page version. Press R anytime to go back to the full site.",
  forwardBlurb:
    "Satwik Medipalli. Software Engineer at Aagna (fintech), where he built Aagna Markets, a live markets news and data site, end to end. UT Dallas MS Business Analytics. Sports analytics projects on MLB Statcast and NFL data, plus real-time apps. Livingston, NJ. satwik.medipalli@gmail.com",
  caseLine:
    "A software engineer who builds live market data at work and studies sports with careful statistics on the side.",
  whyNow:
    "I finished my MS in Business Analytics at UT Dallas in May 2026. Since October I've been a Software Engineer at Aagna, where I built Aagna Markets end to end. The projects are online if you want to check the work first. I'm free to interview this week.",
  proof: [
    ...heroProof,
    {
      id: "endgame",
      name: "Endgame",
      hook: "A daily paper that ends. Personal Mac app, email me to hear more",
      url: "mailto:satwik.medipalli@gmail.com?subject=Endgame",
      label: "Ask",
      screenshot: "/projects/endgame.png",
    },
  ],
};

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
