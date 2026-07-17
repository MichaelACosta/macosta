import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@fontsource-variable/archivo"
import "@fontsource/ibm-plex-sans/400.css"
import "@fontsource/ibm-plex-sans/500.css"
import "@fontsource/ibm-plex-mono/400.css"
import "../globals.css"
import { SITE_URL } from "@/lib/content/site"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { defaultLocale, isLocale, localeMeta, locales, type Locale } from "@/lib/i18n/locales"
import { noFlashThemeScript } from "@/lib/theme/noFlashScript"
import { ThemeProvider } from "@/lib/theme/ThemeProvider"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

function resolveLocale(rawLocale: string): Locale {
  return isLocale(rawLocale) ? rawLocale : defaultLocale
}

interface LocaleParams {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale)
  const dictionary = getDictionary(locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        "pt-BR": "/pt/",
        en: "/en/",
        "x-default": "/pt/",
      },
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `/${locale}/`,
      locale: localeMeta[locale].htmlLang,
      type: "profile",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const locale = resolveLocale((await params).locale)
  const dictionary = getDictionary(locale)

  return (
    <html lang={localeMeta[locale].htmlLang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          {dictionary.nav.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
