import { Text } from "@/components/atoms/Text"
import { StatCard } from "@/components/molecules/StatCard"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./ImpactSection.module.css"

interface ImpactSectionProps {
  dictionary: Dictionary["impact"]
}

function BulletGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={styles.group}>
      <Text as="h3" variant="body" className={styles.groupTitle}>
        {title}
      </Text>
      <ul className={styles.bullets}>
        {items.map((item) => (
          <li key={item}>
            <Text as="span">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ImpactSection({ dictionary }: ImpactSectionProps) {
  return (
    <section id={SECTION_IDS.impact} className={styles.section} aria-labelledby="impact-heading">
      <div className="container">
        <Text as="h2" variant="display" id="impact-heading">
          {dictionary.title}
        </Text>
        <Text muted className={styles.intro}>
          {dictionary.intro}
        </Text>

        <div className={styles.statCards}>
          {dictionary.statCards.map((card) => (
            <StatCard key={card.label} value={card.value} label={card.label} />
          ))}
        </div>

        <div className={styles.groups}>
          <BulletGroup title={dictionary.ciAndT.title} items={dictionary.ciAndT.items} />
          <BulletGroup title={dictionary.naveRs.title} items={dictionary.naveRs.items} />
        </div>
      </div>
    </section>
  )
}
