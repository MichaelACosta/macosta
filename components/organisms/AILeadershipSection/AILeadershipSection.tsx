import { Chip } from "@/components/atoms/Chip"
import { Text } from "@/components/atoms/Text"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./AILeadershipSection.module.css"

interface AILeadershipSectionProps {
  dictionary: Dictionary["aiLeadership"]
}

export function AILeadershipSection({ dictionary }: AILeadershipSectionProps) {
  return (
    <section id={SECTION_IDS.ai} className={styles.section} aria-labelledby="ai-leadership-heading">
      <div className="container">
        <Text as="h2" variant="display" id="ai-leadership-heading">
          {dictionary.title}
        </Text>
        <Text muted className={styles.intro}>
          {dictionary.intro}
        </Text>
        <Chip accent className={styles.badge}>
          {dictionary.badge}
        </Chip>

        <div className={styles.chipGroups}>
          <div>
            <Text as="h3" variant="mono" muted className={styles.groupLabel}>
              {dictionary.workingWith.title}
            </Text>
            <div className={styles.chips}>
              {dictionary.workingWith.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
          <div>
            <Text as="h3" variant="mono" muted className={styles.groupLabel}>
              {dictionary.topics.title}
            </Text>
            <div className={styles.chips}>
              {dictionary.topics.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.caseCard}>
          <Text as="h3" variant="display" className={styles.caseName}>
            {dictionary.case.name}
          </Text>
          <Text muted>{dictionary.case.lead}</Text>
          <dl className={styles.caseFields}>
            {dictionary.case.fields.map((field) => (
              <div key={field.label} className={styles.caseField}>
                <dt>
                  <Text variant="mono" muted className={styles.caseFieldLabel}>
                    {field.label}
                  </Text>
                </dt>
                <dd className={styles.caseFieldValue}>
                  <Text as="span">{field.value}</Text>
                </dd>
              </div>
            ))}
          </dl>
          <Text variant="mono" muted className={styles.pendingNote}>
            {dictionary.case.linkPendingNote}
          </Text>
        </div>
      </div>
    </section>
  )
}
