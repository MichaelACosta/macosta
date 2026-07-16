import type { Content } from "./types"

export const en: Content = {
  lang: "en",
  htmlLang: "en",
  meta: {
    title: "Michael Alexandre Costa — RTE | Portfolio Delivery | AI Leadership",
    description:
      "Release Train Engineer with a technical background and business vision, specialized in connecting people, strategy, portfolio and Artificial Intelligence.",
  },
  skipLink: "Skip to content",
  nav: {
    value: "Where I add value",
    impact: "Impact",
    ai: "AI Leadership",
    journey: "Journey",
  },
  langSwitch: {
    label: "Switch language",
  },
  themeToggle: {
    label: "Switch theme",
  },
  hero: {
    eyebrow: "Release Train Engineer (RTE) · Portfolio Delivery · AI Leadership",
    name: "Michael Alexandre Costa",
    sub: "I connect business, people, portfolio and Artificial Intelligence to turn strategy into execution — with predictability, collaboration and continuous value.",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Email",
  },
  value: {
    heading: "Where I add value",
    items: [
      "Portfolio management and delivery governance",
      "Agile Release Train coordination (SAFe)",
      "End-to-end strategy and execution",
      "Artificial Intelligence applied to leadership",
      "Metrics-driven management",
      "Direct leadership and development of people",
      "Alignment across business, product and technology",
    ],
  },
  impact: {
    heading: "Proven impact",
    intro: "Concrete results from the contexts I work in today and worked in recently.",
    stats: [
      { value: "7", label: "squads coordinated" },
      { value: "~48", label: "professionals" },
      { value: "10+", label: "years in digital products" },
    ],
    ciAndT: {
      title: "CI&T — Release Train Engineer",
      items: [
        "Teams distributed across CI&T, client and partners",
        "SAFe governance: PI Planning, Scrum of Scrums and dependency management",
        "Leading the AI-applied-to-management initiative",
        "Technology migration of strategic products",
        "Improved predictability and team maturity",
      ],
    },
    naveRs: {
      title: "Nave.rs — Front End Lead",
      items: [
        "Technical leadership and Tech Lead mentoring",
        "Team growth",
        "Large-scale digital projects",
      ],
    },
  },
  ai: {
    heading: "AI Leadership",
    intro:
      "I lead the Generative AI initiative applied to management within the CI&T community. Recognized as a reference in adopting AI for leadership and delivery.",
    seal: "AI reference · CI&T community",
    audiencesLabel: "Working with",
    audiences: ["Leaders", "RTEs", "Scrum Masters", "Developers", "QA"],
    topicsLabel: "Topics led",
    topics: [
      "Prompt engineering",
      "AI agents",
      "Task automation",
      "Productivity",
      "AI for management",
      "Best practices",
      "Enablement",
    ],
    case: {
      name: "chefIA",
      lead: "A Git + Claude Code management workflow system.",
      problemLabel: "Problem",
      problem:
        "Management routines (weekly report, follow-ups, 1:1 prep, trend analysis) consume recurring RTE/PM hours.",
      originLabel: "Origin",
      origin:
        "Born from daily practice — I use an equivalent internal version in day-to-day management at CI&T, with real gains in debriefings, reports, data search and analysis, spotting inconsistencies, and supporting IDPs and feedback.",
      solutionLabel: "Solution",
      solution:
        "A Git repo + Claude Code, with specialized subagents (weekly-report, follow-up, 1on1-prep, trends), slash commands, skills and templates.",
      statusLabel: "Status",
      status:
        "In progress (public POC under construction): an open, evolving template built from real use in a corporate setting.",
    },
  },
  people: {
    heading: "Leadership & people",
    badge: "PDM — People Development Manager (CI&T) · direct people leader",
    items: [
      "10+ years building digital products",
      "Solid technical background (dev → Tech Lead → Scrum Master → RTE)",
      "Scrum Master across multiple teams",
      "Training and development of people",
      "Continuous improvement culture",
    ],
  },
  journey: {
    heading: "Journey",
    stops: [
      {
        company: "UFPel",
        role: "Bachelor's and Master's in Computer Science",
      },
      { company: "O.S. Systems / UpdateHub", role: "Software Developer" },
      { company: "Nave.rs", role: "Front End Lead" },
      {
        company: "CI&T",
        role: "Developer → Scrum Master → RTE → PDM",
        sub: "Internal progression: from engineering to agile-train and people leadership.",
      },
    ],
  },
  skills: {
    heading: "Contexts of work",
    management: {
      title: "Management & Agile",
      items: [
        "Portfolio Management",
        "SAFe",
        "Agile Release Train",
        "Program Management",
        "Governance",
        "People Management",
      ],
    },
    technical: {
      title: "Technical & AI",
      items: [
        "Generative AI",
        "Prompt Engineering",
        "AI Agents",
        "React",
        "TypeScript",
        "Node.js",
        "Architecture",
        "Systems migration",
        "Academic research",
      ],
    },
  },
  credentials: {
    heading: "Education & credentials",
    education: {
      title: "Education",
      items: [
        "BSc in Computer Science — UFPel",
        "MSc in Computer Science — UFPel",
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        "SAFe",
        "PDM — People Development Manager (CI&T)",
        "Leadership",
        "People Management",
        "Generative AI",
        "Scrum",
        "Management",
      ],
    },
    languages: {
      title: "Languages",
      items: [
        "Portuguese (native)",
        "Spanish (intermediate)",
        "English (intermediate)",
      ],
    },
  },
  git: {
    heading: "I still write code",
    note: "Real-time data from the public GitHub API (@MichaelACosta).",
    repositories: "repositories",
    followers: "followers",
    languagesLabel: "Most used languages",
    fallback: "GitHub data is unavailable right now.",
  },
  footer: {
    quote:
      "Release Train Engineer with a technical background and business vision, specialized in connecting people, strategy, portfolio and Artificial Intelligence to transform organizations into more predictable, collaborative and value-driven environments.",
    location: "Camaquã, RS — Remote",
    copyright: `© ${new Date().getFullYear()} Michael Alexandre Costa`,
  },
}
