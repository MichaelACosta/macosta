import { Text } from "@/components/atoms/Text"
import { ContactLink } from "@/components/molecules/ContactLink"
import { EMAIL_HREF, LINKEDIN_URL } from "@/lib/content/links"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./Footer.module.css"

interface FooterProps {
  dictionary: Dictionary["footer"]
  headingLabel: string
}

export function Footer({ dictionary, headingLabel }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer id={SECTION_IDS.contact} className={styles.footer} aria-label={headingLabel}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.links}>
          <ContactLink href={LINKEDIN_URL}>{dictionary.linkedInLabel}</ContactLink>
          <ContactLink href={EMAIL_HREF}>{dictionary.emailLabel}</ContactLink>
          <ContactLink>{dictionary.location}</ContactLink>
        </div>

        <Text as="p" className={styles.quote}>
          &ldquo;{dictionary.closingQuote}&rdquo;
        </Text>

        <Text variant="mono" muted className={styles.copyright}>
          © {year} {dictionary.copyrightName}
        </Text>
      </div>
    </footer>
  )
}
