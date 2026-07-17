import { Chip } from "@/components/atoms/Chip"
import { Text } from "@/components/atoms/Text"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./LeadershipPeopleSection.module.css"

interface LeadershipPeopleSectionProps {
  dictionary: Dictionary["leadershipPeople"]
}

export function LeadershipPeopleSection({ dictionary }: LeadershipPeopleSectionProps) {
  return (
    <section
      id={SECTION_IDS.leadership}
      className={styles.section}
      aria-labelledby="leadership-people-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="leadership-people-heading">
          {dictionary.title}
        </Text>
        <Chip accent className={styles.badge}>
          {dictionary.badgePdm}
        </Chip>
        <ul className={styles.bullets}>
          {dictionary.items.map((item) => (
            <li key={item}>
              <Text as="span">{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
