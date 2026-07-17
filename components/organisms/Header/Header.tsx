import Link from "next/link"
import { MonogramLogo } from "@/components/atoms/MonogramLogo"
import { ThemeToggle } from "@/components/atoms/ThemeToggle"
import { LanguageToggle } from "@/components/molecules/LanguageToggle"
import { NavItem } from "@/components/molecules/NavItem"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Locale } from "@/lib/i18n/locales"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./Header.module.css"

interface HeaderProps {
  dictionary: Dictionary["nav"]
  homeLabel: string
  locale: Locale
}

export function Header({ dictionary, homeLabel, locale }: HeaderProps) {
  const navEntries: { id: string; label: string }[] = [
    { id: SECTION_IDS.value, label: dictionary.sections.value },
    { id: SECTION_IDS.impact, label: dictionary.sections.impact },
    { id: SECTION_IDS.ai, label: dictionary.sections.ai },
    { id: SECTION_IDS.leadership, label: dictionary.sections.leadership },
    { id: SECTION_IDS.trajectory, label: dictionary.sections.trajectory },
    { id: SECTION_IDS.contexts, label: dictionary.sections.contexts },
    { id: SECTION_IDS.education, label: dictionary.sections.education },
    { id: SECTION_IDS.github, label: dictionary.sections.github },
    { id: SECTION_IDS.contact, label: dictionary.sections.contact },
  ]

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href={`/${locale}`} className={styles.logoLink} aria-label={homeLabel}>
          <MonogramLogo />
        </Link>

        <nav className={styles.nav}>
          {navEntries.map((entry) => (
            <NavItem key={entry.id} href={`#${entry.id}`}>
              {entry.label}
            </NavItem>
          ))}
        </nav>

        <div className={styles.controls}>
          <ThemeToggle label={dictionary.themeToggleLabel} />
          <LanguageToggle currentLocale={locale} ariaLabel={dictionary.languageToggleLabel} />
        </div>
      </div>
    </header>
  )
}
