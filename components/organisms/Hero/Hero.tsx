import { Button } from "@/components/atoms/Button"
import { Text } from "@/components/atoms/Text"
import { EMAIL_HREF, LINKEDIN_URL } from "@/lib/content/links"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./Hero.module.css"

interface HeroProps {
  dictionary: Dictionary["hero"]
}

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={`container ${styles.inner}`}>
        <Text as="span" variant="mono" className={styles.headline}>
          {dictionary.headline}
        </Text>
        <Text as="h1" variant="display" id="hero-heading" className={styles.name}>
          {dictionary.name}
        </Text>
        <Text muted className={styles.subtitle}>
          {dictionary.subtitle}
        </Text>
        <div className={styles.ctas}>
          <Button href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            {dictionary.ctaLinkedIn}
          </Button>
          <Button href={EMAIL_HREF} variant="ghost">
            {dictionary.ctaEmail}
          </Button>
        </div>
      </div>
    </section>
  )
}
