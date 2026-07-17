import type { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./IconButton.module.css"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function IconButton({ className, children, ...rest }: IconButtonProps) {
  const classes = [styles.iconButton, className].filter(Boolean).join(" ")

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
