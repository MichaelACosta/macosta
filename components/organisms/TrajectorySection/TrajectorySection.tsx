import { Text } from "@/components/atoms/Text"
import { TimelineStation } from "@/components/molecules/TimelineStation"
import { SECTION_IDS } from "@/lib/content/sectionIds"
import type { Dictionary } from "@/lib/i18n/types"
import styles from "./TrajectorySection.module.css"

interface TrajectorySectionProps {
  dictionary: Dictionary["trajectory"]
}

export function TrajectorySection({ dictionary }: TrajectorySectionProps) {
  const lastStopIndex = dictionary.stops.length - 1

  return (
    <section
      id={SECTION_IDS.trajectory}
      className={styles.section}
      aria-labelledby="trajectory-heading"
    >
      <div className="container">
        <Text as="h2" variant="display" id="trajectory-heading">
          {dictionary.title}
        </Text>
        <ol className={styles.timeline}>
          {dictionary.stops.map((stop, index) => (
            <TimelineStation key={stop.name} name={stop.name} description={stop.description}>
              {index === lastStopIndex && (
                <Text variant="mono" muted className={styles.subline}>
                  {dictionary.ciAndTSubline}
                </Text>
              )}
            </TimelineStation>
          ))}
        </ol>
      </div>
    </section>
  )
}
