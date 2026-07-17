import { ImageResponse } from "next/og"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/locales"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

interface LocaleParams {
  params: Promise<{ locale: string }>
}

export default async function OpengraphImage({ params }: LocaleParams) {
  const rawLocale = (await params).locale
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const dictionary = getDictionary(locale)

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1220",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#F2A33C",
            marginBottom: 24,
          }}
        >
          {dictionary.hero.headline}
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, color: "#E8ECF4" }}>
          {dictionary.hero.name}
        </div>
      </div>
    ),
    size
  )
}
