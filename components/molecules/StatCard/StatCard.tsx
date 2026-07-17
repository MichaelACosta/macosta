import { StatNumber } from "@/components/atoms/StatNumber"
import styles from "./StatCard.module.css"

interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className={styles.card}>
      <StatNumber value={value} label={label} />
    </div>
  )
}
