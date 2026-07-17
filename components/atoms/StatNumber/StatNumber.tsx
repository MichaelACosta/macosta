import styles from "./StatNumber.module.css"

interface StatNumberProps {
  value: string
  label: string
}

export function StatNumber({ value, label }: StatNumberProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}
