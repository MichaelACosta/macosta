import { Chip } from "@/components/atoms/Chip"
import { Text } from "@/components/atoms/Text"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./ContextsSection.module.css"

interface ContextsSectionProps {
  dictionary: Dictionary["contexts"]
}

function ChipColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <Text as="h3" variant="body" className={styles.columnTitle}>
        {title}
      </Text>
      <div className={styles.chips}>
        {items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </div>
  )
}

export function ContextsSection({ dictionary }: ContextsSectionProps) {
  return (
    <section
      id={SECTION_IDS.contexts}
      className={styles.section}
      aria-labelledby="contexts-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="contexts-heading">
          {dictionary.title}
        </Text>
        <div className={styles.columns}>
          <ChipColumn
            title={dictionary.managementAndAgile.title}
            items={dictionary.managementAndAgile.items}
          />
          <ChipColumn
            title={dictionary.technicalAndAi.title}
            items={dictionary.technicalAndAi.items}
          />
        </div>
      </div>
    </section>
  )
}
