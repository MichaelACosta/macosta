import type { ReactNode } from "react"
import { Text } from "@/components/atoms/Text"
import styles from "./TimelineStation.module.css"

interface TimelineStationProps {
  name: string
  description: string
  children?: ReactNode
}

export function TimelineStation({ name, description, children }: TimelineStationProps) {
  return (
    <li className={styles.station}>
      <span className={styles.dot} aria-hidden="true" />
      <Text as="h3" variant="body" className={styles.name}>
        {name}
      </Text>
      <Text variant="mono" muted className={styles.description}>
        {description}
      </Text>
      {children}
    </li>
  )
}
