import type { GitHubRepo } from "../../Services/gitApi"

export interface LanguageDatum {
  key: string
  data: number
}

export const formatDataLanguages = (repos: GitHubRepo[]): LanguageDatum[] => {
  const languages = repos
    .map((repo) => repo.language)
    .filter((language): language is string => language !== null)

  return languages.reduce<LanguageDatum[]>((acc, language) => {
    const existing = acc.find(({ key }) => key === language)
    if (existing) {
      existing.data += 1
      return acc
    }
    return [...acc, { key: language, data: 1 }]
  }, [])
}
