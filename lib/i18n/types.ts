export interface LabeledItem {
  label: string
}

export interface StatCardContent {
  value: string
  label: string
}

export interface LabeledGroup {
  title: string
  items: string[]
}

export interface CaseField {
  label: string
  value: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  nav: {
    skipToContent: string
    themeToggleLabel: string
    languageToggleLabel: string
    sections: {
      value: string
      impact: string
      ai: string
      leadership: string
      trajectory: string
      contexts: string
      education: string
      github: string
      contact: string
    }
  }
  hero: {
    name: string
    headline: string
    subtitle: string
    ctaLinkedIn: string
    ctaEmail: string
  }
  whereIAddValue: {
    title: string
    items: string[]
  }
  impact: {
    title: string
    intro: string
    statCards: StatCardContent[]
    ciAndT: LabeledGroup
    naveRs: LabeledGroup
  }
  aiLeadership: {
    title: string
    intro: string
    badge: string
    workingWith: LabeledGroup
    topics: LabeledGroup
    case: {
      name: string
      lead: string
      fields: CaseField[]
      linkPendingNote: string
    }
  }
  leadershipPeople: {
    title: string
    items: string[]
    badgePdm: string
  }
  trajectory: {
    title: string
    stops: { name: string; description: string }[]
    ciAndTSubline: string
  }
  contexts: {
    title: string
    managementAndAgile: LabeledGroup
    technicalAndAi: LabeledGroup
  }
  education: {
    title: string
    academic: { title: string; items: LabeledItem[] }
    certifications: { title: string; items: LabeledItem[] }
    languages: { title: string; items: LabeledItem[] }
  }
  githubProof: {
    title: string
    intro: string
    note: string
    followers: string
    following: string
    repositories: string
    languagesLabel: string
    otherLanguagesLabel: string
    errorMessage: string
  }
  footer: {
    linkedInLabel: string
    emailLabel: string
    location: string
    closingQuote: string
    copyrightName: string
  }
}

/** Recursively optional — models a translation that may still be missing keys. */
export type DeepPartial<T> = T extends (infer U)[]
  ? DeepPartial<U>[]
  : T extends object
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T
