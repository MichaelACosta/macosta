import { Text } from "@/components/atoms/Text"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./EducationSection.module.css"

interface EducationSectionProps {
  dictionary: Dictionary["education"]
}

function Block({ title, items }: { title: string; items: { label: string }[] }) {
  return (
    <div className={styles.block}>
      <Text as="h3" variant="mono" muted className={styles.blockTitle}>
        {title}
      </Text>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            <Text as="span">{item.label}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function EducationSection({ dictionary }: EducationSectionProps) {
  return (
    <section
      id={SECTION_IDS.education}
      className={styles.section}
      aria-labelledby="education-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="education-heading">
          {dictionary.title}
        </Text>
        <div className={styles.blocks}>
          <Block title={dictionary.academic.title} items={dictionary.academic.items} />
          <Block
            title={dictionary.certifications.title}
            items={dictionary.certifications.items}
          />
          <Block title={dictionary.languages.title} items={dictionary.languages.items} />
        </div>
      </div>
    </section>
  )
}
