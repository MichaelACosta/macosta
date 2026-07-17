import type { ReactNode } from "react"
import styles from "./ContactLink.module.css"

interface ContactLinkProps {
  href?: string
  children: ReactNode
}

export function ContactLink({ href, children }: ContactLinkProps) {
  if (!href) {
    return <span className={styles.link}>{children}</span>
  }

  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  )
}
