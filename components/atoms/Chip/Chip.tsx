import type { ReactNode } from "react"
import styles from "./Chip.module.css"

interface ChipProps {
  accent?: boolean
  className?: string
  children: ReactNode
}

export function Chip({ accent = false, className, children }: ChipProps) {
  const classes = [styles.chip, accent ? styles.accent : "", className]
    .filter(Boolean)
    .join(" ")

  return <span className={classes}>{children}</span>
}
