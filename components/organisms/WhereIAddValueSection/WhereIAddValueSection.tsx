import { Text } from "@/components/atoms/Text"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./WhereIAddValueSection.module.css"

interface WhereIAddValueSectionProps {
  dictionary: Dictionary["whereIAddValue"]
}

export function WhereIAddValueSection({ dictionary }: WhereIAddValueSectionProps) {
  return (
    <section
      id={SECTION_IDS.value}
      className={styles.section}
      aria-labelledby="where-i-add-value-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="where-i-add-value-heading">
          {dictionary.title}
        </Text>
        <ul className={styles.grid}>
          {dictionary.items.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.marker} aria-hidden="true" />
              <Text as="span">{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
