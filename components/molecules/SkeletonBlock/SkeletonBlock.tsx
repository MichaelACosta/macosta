import styles from "./SkeletonBlock.module.css"

interface SkeletonBlockProps {
  label: string
  width?: string
  height?: string
}

export function SkeletonBlock({ label, width = "100%", height = "16px" }: SkeletonBlockProps) {
  return (
    <span
      className={styles.skeleton}
      style={{ width, height }}
      role="status"
      aria-label={label}
    />
  )
}
