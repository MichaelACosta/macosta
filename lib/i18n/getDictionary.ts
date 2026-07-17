import { en } from "./dictionaries/en"
import { pt } from "./dictionaries/pt"
import type { Locale } from "./locales"
import type { Dictionary } from "./types"

type AnyRecord = Record<string, unknown>

const isPlainObject = (value: unknown): value is AnyRecord =>
  typeof value === "object" && value !== null && !Array.isArray(value)

/**
 * Fills any key missing in `partial` with the equivalent value from
 * `fallback`, warning as it goes. Implements US-05 CA3: a missing EN key
 * falls back to PT-BR with a build warning instead of breaking the build.
 */
export function fallbackMerge<T extends object>(
  partial: T,
  fallback: T,
  localeLabel: string,
  path = ""
): T {
  const partialRecord = partial as AnyRecord
  const fallbackRecord = fallback as AnyRecord
  const result: AnyRecord = { ...partialRecord }

  for (const key of Object.keys(fallbackRecord)) {
    const keyPath = path ? `${path}.${key}` : key
    const fallbackValue = fallbackRecord[key]
    const partialValue = partialRecord[key]

    if (partialValue === undefined) {
      console.warn(
        `[i18n] missing key "${keyPath}" in "${localeLabel}" dictionary — falling back to PT-BR`
      )
      result[key] = fallbackValue
      continue
    }

    if (isPlainObject(fallbackValue) && isPlainObject(partialValue)) {
      result[key] = fallbackMerge(partialValue, fallbackValue, localeLabel, keyPath)
    }
  }

  return result as T
}

const dictionaries: Record<Locale, Dictionary> = {
  pt,
  en: fallbackMerge(en, pt, "en"),
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}
