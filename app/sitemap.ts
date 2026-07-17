import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/content/site"
import { locales } from "@/lib/i18n/locales"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}/`,
  }))
}
