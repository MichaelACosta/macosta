import type { DeepPartial, Dictionary } from "../types"

export const en = {
  meta: {
    title:
      "Michael Alexandre Costa — Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership",
    description:
      "Release Train Engineer with a technical background, specialized in portfolio delivery, SAFe execution and AI leadership applied to management.",
  },
  nav: {
    skipToContent: "Skip to content",
    themeToggleLabel: "Toggle theme",
    languageToggleLabel: "Switch language",
    sections: {
      value: "Value",
      impact: "Impact",
      ai: "AI",
      leadership: "Leadership",
      trajectory: "Journey",
      contexts: "Work",
      education: "Education",
      github: "GitHub",
      contact: "Contact",
    },
  },
  hero: {
    name: "Michael Alexandre Costa",
    headline: "Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership",
    subtitle:
      "I connect business, people, portfolio and Artificial Intelligence to turn strategy into execution — with predictability, collaboration and continuous value.",
    ctaLinkedIn: "LinkedIn",
    ctaEmail: "Email",
  },
  whereIAddValue: {
    title: "Where I add value",
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
    title: "Proven impact",
    intro: "Concrete results from the contexts I work in today and worked in recently.",
    statCards: [
      { value: "7", label: "squads coordinated" },
      { value: "~48", label: "professionals" },
      { value: "10+", label: "years in digital products" },
    ],
    ciAndT: {
      title: "CI&T — Release Train Engineer",
      items: [
        "Coordination of 7 multidisciplinary squads",
        "An ecosystem of ~48 professionals",
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
  aiLeadership: {
    title: "AI Leadership",
    intro:
      "I lead the Generative AI initiative applied to management within the CI&T community. Recognized as a reference in adopting AI for leadership and delivery.",
    badge: "Recognized reference in AI adoption — CI&T community",
    workingWith: {
      title: "Working with",
      items: ["Leaders", "RTEs", "Scrum Masters", "Developers", "QA"],
    },
    topics: {
      title: "Topics led",
      items: [
        "prompt engineering",
        "AI agents",
        "task automation",
        "productivity",
        "AI for management",
        "best practices",
        "enablement",
      ],
    },
    case: {
      name: "chefIA",
      lead: "A Git + Claude Code management workflow system.",
      fields: [
        {
          label: "Problem",
          value:
            "Management routines (weekly report, follow-ups, 1:1 prep, trend analysis) consume recurring RTE/PM hours.",
        },
        {
          label: "Origin",
          value:
            "Born from daily practice — I use an equivalent internal version in day-to-day management at CI&T, with real gains in debriefings, reports, data search and analysis, spotting inconsistencies, and supporting IDPs and feedback.",
        },
        {
          label: "Solution",
          value:
            "A Git repo + Claude Code, with specialized subagents (relatorio-semanal, follow-up, prep-1on1, tendencias), slash commands, skills and templates.",
        },
        {
          label: "Format",
          value:
            "Open template on GitHub, with a guide for other managers to adopt — a public version derived from internal practice (no sensitive data).",
        },
        {
          label: "Status",
          value:
            "In progress (public POC under construction): an open, evolving project built from real use in a corporate setting.",
        },
      ],
      linkPendingNote:
        "The repository link will be added once the content is published.",
    },
  },
  leadershipPeople: {
    title: "Leadership & people",
    items: [
      "10+ years building digital products",
      "Solid technical background (dev → Tech Lead → Scrum Master → RTE)",
      "Scrum Master across multiple teams",
      "Training and development of people",
      "Continuous improvement culture",
    ],
    badgePdm: "PDM — People Development Manager (CI&T)",
  },
  trajectory: {
    title: "Journey",
    stops: [
      {
        name: "UFPel",
        description:
          "Bachelor's and Master's in Computer Science (parallel computing research)",
      },
      { name: "O.S. Systems / UpdateHub", description: "Software Developer" },
      { name: "Nave.rs", description: "Front End Lead" },
      {
        name: "CI&T",
        description: "Developer → Scrum Master → RTE → direct people leader (PDM)",
      },
    ],
    ciAndTSubline: "Internal progression: from engineering to agile-train and people leadership.",
  },
  contexts: {
    title: "Contexts of work",
    managementAndAgile: {
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
    technicalAndAi: {
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
  education: {
    title: "Education & credentials",
    academic: {
      title: "Education",
      items: [
        { label: "BSc in Computer Science — UFPel" },
        { label: "MSc in Computer Science — UFPel" },
      ],
    },
    certifications: {
      title: "Certifications",
      items: [
        { label: "SAFe" },
        { label: "PDM — People Development Manager (CI&T)" },
        { label: "Leadership" },
        { label: "People Management" },
        { label: "Generative AI" },
        { label: "Scrum" },
        { label: "Management" },
      ],
    },
    languages: {
      title: "Languages",
      items: [
        { label: "Portuguese (native)" },
        { label: "Spanish (intermediate)" },
        { label: "English (intermediate)" },
      ],
    },
  },
  githubProof: {
    title: "I still write code",
    intro: "A few numbers straight from GitHub:",
    note: "Real-time data from the public GitHub API (@MichaelACosta).",
    followers: "Followers",
    following: "Following",
    repositories: "Repositories",
    languagesLabel: "Most used languages",
    otherLanguagesLabel: "Other",
    errorMessage: "Couldn't load GitHub data right now.",
  },
  footer: {
    linkedInLabel: "linkedin.com/in/michaelalexandrecosta",
    emailLabel: "costa0ma@gmail.com",
    location: "Camaquã, RS — Remote",
    closingQuote:
      "Release Train Engineer with a technical background and business vision, specialized in connecting people, strategy, portfolio and Artificial Intelligence to transform organizations into more predictable, collaborative and value-driven environments.",
    copyrightName: "Michael Alexandre Costa",
  },
} satisfies DeepPartial<Dictionary> as Dictionary
