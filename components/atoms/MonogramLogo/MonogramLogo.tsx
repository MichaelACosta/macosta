import styles from "./MonogramLogo.module.css"

export function MonogramLogo() {
  return (
    <span className={styles.monogram} aria-hidden="true">
      MC
    </span>
  )
}
