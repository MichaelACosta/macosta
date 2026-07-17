import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

type ButtonVariant = "solid" | "ghost"

interface SharedProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonProps = AnchorButtonProps | NativeButtonProps

export function Button({ variant = "solid", className, children, ...rest }: ButtonProps) {
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(" ")

  if ("href" in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
