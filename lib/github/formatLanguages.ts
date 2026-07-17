import type { LanguageSlice } from "@/components/molecules/LanguageDonut"

export interface RepoLike {
  language: string | null
}

const MAX_SLICES = 5

const roundToOneDecimal = (value: number): number => Math.round(value * 10) / 10

/**
 * Groups repos by language into percentage slices for the donut chart,
 * collapsing everything past the top 4 languages into one "other" slice
 * so the legend/chart palette (5 colors) never runs out.
 */
export function formatLanguages(
  repos: RepoLike[],
  otherLabel: string
): LanguageSlice[] {
  const counts = new Map<string, number>()

  for (const repo of repos) {
    if (!repo.language) continue
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1)
  }

  const total = Array.from(counts.values()).reduce((sum, count) => sum + count, 0)
  if (total === 0) return []

  const sorted = Array.from(counts.entries()).sort(([, a], [, b]) => b - a)
  const top = sorted.slice(0, MAX_SLICES - 1)
  const rest = sorted.slice(MAX_SLICES - 1)

  const slices: LanguageSlice[] = top.map(([name, count]) => ({
    name,
    percentage: roundToOneDecimal((count / total) * 100),
  }))

  if (rest.length > 0) {
    const restCount = rest.reduce((sum, [, count]) => sum + count, 0)
    slices.push({
      name: otherLabel,
      percentage: roundToOneDecimal((restCount / total) * 100),
    })
  }

  return slices
}
