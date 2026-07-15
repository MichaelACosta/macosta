export type Lang = "pt-BR" | "en"

export interface StatItem {
  value: string
  label: string
}

export interface BulletGroup {
  title: string
  items: string[]
}

export interface JourneyStop {
  company: string
  role: string
  sub?: string
}

export interface Content {
  lang: Lang
  htmlLang: string
  meta: {
    title: string
    description: string
  }
  skipLink: string
  nav: {
    value: string
    impact: string
    ai: string
    journey: string
  }
  langSwitch: {
    label: string
  }
  themeToggle: {
    label: string
  }
  hero: {
    eyebrow: string
    name: string
    sub: string
    ctaLinkedin: string
    ctaEmail: string
  }
  value: {
    heading: string
    items: string[]
  }
  impact: {
    heading: string
    intro: string
    stats: StatItem[]
    ciAndT: BulletGroup
    naveRs: BulletGroup
  }
  ai: {
    heading: string
    intro: string
    seal: string
    audiencesLabel: string
    audiences: string[]
    topicsLabel: string
    topics: string[]
    case: {
      name: string
      lead: string
      problemLabel: string
      problem: string
      originLabel: string
      origin: string
      solutionLabel: string
      solution: string
      statusLabel: string
      status: string
    }
  }
  people: {
    heading: string
    badge: string
    items: string[]
  }
  journey: {
    heading: string
    stops: JourneyStop[]
  }
  skills: {
    heading: string
    management: BulletGroup
    technical: BulletGroup
  }
  credentials: {
    heading: string
    education: BulletGroup
    certifications: BulletGroup
    languages: BulletGroup
  }
  git: {
    heading: string
    note: string
    repositories: string
    followers: string
    languagesLabel: string
    fallback: string
  }
  footer: {
    quote: string
    location: string
    copyright: string
  }
}
