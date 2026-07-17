export const locales = ["pt", "en"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "pt"

export const localeMeta: Record<Locale, { htmlLang: string; toggleLabel: string }> = {
  pt: { htmlLang: "pt-BR", toggleLabel: "PT" },
  en: { htmlLang: "en", toggleLabel: "EN" },
}

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)
