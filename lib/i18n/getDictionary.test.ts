import { describe, expect, it, vi } from "vitest"
import { fallbackMerge, getDictionary } from "./getDictionary"

interface HeroFixture {
  hero: { name: string; subtitle?: string }
}

interface FooterFixture {
  footer?: { emailLabel: string }
}

describe("fallbackMerge", () => {
  it("keeps every key present in the partial dictionary untouched", () => {
    const fallback: HeroFixture = { hero: { name: "PT name", subtitle: "PT subtitle" } }
    const partial: HeroFixture = { hero: { name: "EN name", subtitle: "EN subtitle" } }

    const result = fallbackMerge(partial, fallback, "en")

    expect(result).toEqual(partial)
  })

  it("falls back to the PT-BR value for a missing nested key and warns", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    const fallback: HeroFixture = { hero: { name: "PT name", subtitle: "PT subtitle" } }
    const partial: HeroFixture = { hero: { name: "EN name" } }

    const result = fallbackMerge(partial, fallback, "en")

    expect(result.hero.subtitle).toBe("PT subtitle")
    expect(result.hero.name).toBe("EN name")
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('missing key "hero.subtitle"')
    )
  })

  it("falls back to a whole missing top-level section", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined)
    const fallback: FooterFixture = { footer: { emailLabel: "costa0ma@gmail.com" } }
    const partial: FooterFixture = {}

    const result = fallbackMerge(partial, fallback, "en")

    expect(result.footer).toEqual(fallback.footer)
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('missing key "footer"'))
  })
})

describe("getDictionary", () => {
  it("returns fully-populated PT and EN dictionaries", () => {
    const pt = getDictionary("pt")
    const en = getDictionary("en")

    expect(pt.hero.name).toBe("Michael Alexandre Costa")
    expect(en.hero.name).toBe("Michael Alexandre Costa")
    expect(pt.hero.headline).toBe(en.hero.headline)
    expect(pt.whereIAddValue.items).toHaveLength(7)
    expect(en.whereIAddValue.items).toHaveLength(7)
  })
})
