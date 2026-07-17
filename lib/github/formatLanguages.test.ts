import { describe, expect, it } from "vitest"
import { formatLanguages } from "./formatLanguages"

describe("formatLanguages", () => {
  it("returns an empty list when there are no repos with a language", () => {
    expect(formatLanguages([], "Other")).toEqual([])
    expect(formatLanguages([{ language: null }, { language: null }], "Other")).toEqual([])
  })

  it("computes percentage per language, ignoring repos without a language", () => {
    const repos = [
      { language: "TypeScript" },
      { language: "TypeScript" },
      { language: "TypeScript" },
      { language: "Python" },
      { language: null },
    ]

    const result = formatLanguages(repos, "Other")

    expect(result).toEqual([
      { name: "TypeScript", percentage: 75 },
      { name: "Python", percentage: 25 },
    ])
  })

  it("sorts languages by frequency, descending", () => {
    const repos = [
      { language: "Python" },
      { language: "TypeScript" },
      { language: "TypeScript" },
    ]

    const result = formatLanguages(repos, "Other")

    expect(result.map((slice) => slice.name)).toEqual(["TypeScript", "Python"])
  })

  it("collapses languages beyond the top 4 into an 'other' slice", () => {
    const repos = [
      { language: "A" },
      { language: "A" },
      { language: "B" },
      { language: "C" },
      { language: "D" },
      { language: "E" },
      { language: "F" },
    ]

    const result = formatLanguages(repos, "Outras")

    expect(result).toHaveLength(5)
    expect(result[4]).toEqual({ name: "Outras", percentage: expect.any(Number) })
    const total = result.reduce((sum, slice) => sum + slice.percentage, 0)
    expect(total).toBeCloseTo(100, 0)
  })
})
