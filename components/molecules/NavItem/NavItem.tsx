import styles from "./NavItem.module.css"

interface NavItemProps {
  href: string
  children: string
}

export function NavItem({ href, children }: NavItemProps) {
  return (
    <a className={styles.navItem} href={href}>
      {children}
    </a>
  )
}
