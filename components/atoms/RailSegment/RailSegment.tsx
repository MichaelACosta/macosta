import styles from "./RailSegment.module.css"

interface RailSegmentProps {
  className?: string
}

/** Decorative vertical rail line — the visual signature described in docs/05-design-spec.md §1. Purely decorative. */
export function RailSegment({ className }: RailSegmentProps) {
  const classes = [styles.rail, className].filter(Boolean).join(" ")
  return <div aria-hidden="true" className={classes} />
}
