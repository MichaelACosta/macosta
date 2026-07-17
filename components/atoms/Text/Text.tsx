import type { ElementType, HTMLAttributes, ReactNode } from "react"
import styles from "./Text.module.css"

type TextVariant = "display" | "body" | "mono"
type TextAs = "p" | "span" | "h1" | "h2" | "h3" | "div"

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextAs
  variant?: TextVariant
  muted?: boolean
  className?: string
  children: ReactNode
}

export function Text({
  as,
  variant = "body",
  muted = false,
  className,
  children,
  ...rest
}: TextProps) {
  const Component: ElementType = as ?? "p"
  const classes = [styles[variant], muted ? styles.muted : "", className]
    .filter(Boolean)
    .join(" ")

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  )
}
