import Link from "next/link"
import { locales, localeMeta, type Locale } from "@/lib/i18n/locales"
import styles from "./LanguageToggle.module.css"

interface LanguageToggleProps {
  currentLocale: Locale
  ariaLabel: string
}

export function LanguageToggle({ currentLocale, ariaLabel }: LanguageToggleProps) {
  return (
    <div className={styles.toggle} role="group" aria-label={ariaLabel}>
      {locales.map((locale, index) => (
        <span key={locale} className={styles.item}>
          {index > 0 && (
            <span aria-hidden="true" className={styles.separator}>
              |
            </span>
          )}
          <Link
            href={`/${locale}`}
            aria-current={locale === currentLocale ? "true" : undefined}
            className={locale === currentLocale ? styles.active : styles.inactive}
          >
            {localeMeta[locale].toggleLabel}
          </Link>
        </span>
      ))}
    </div>
  )
}
