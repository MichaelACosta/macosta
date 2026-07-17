import { HomeTemplate } from "@/components/templates/HomeTemplate"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/locales"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LocalePageProps {
  params: Promise<{ locale: string }>
}

export default async function LocalePage({ params }: LocalePageProps) {
  const rawLocale = (await params).locale
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale
  const dictionary = getDictionary(locale)

  return <HomeTemplate dictionary={dictionary} locale={locale} />
}
