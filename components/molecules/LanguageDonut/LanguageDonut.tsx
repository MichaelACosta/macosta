import styles from "./LanguageDonut.module.css"

export interface LanguageSlice {
  name: string
  percentage: number
}

interface LanguageDonutProps {
  languages: LanguageSlice[]
  label: string
}

const SIZE = 120
const STROKE = 16
const RADIUS = (SIZE - STROKE) / 2
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

interface Arc {
  name: string
  dash: number
  offset: number
}

function toArcs(languages: LanguageSlice[]): Arc[] {
  return languages.reduce<Arc[]>((arcs, lang) => {
    const dash = (lang.percentage / 100) * CIRCUMFERENCE
    const offset = arcs.reduce((sum, arc) => sum + arc.dash, 0)
    return [...arcs, { name: lang.name, dash, offset }]
  }, [])
}

export function LanguageDonut({ languages, label }: LanguageDonutProps) {
  const arcs = toArcs(languages)

  return (
    <div className={styles.wrapper}>
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="img"
        aria-label={label}
      >
        <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
          {arcs.map((arc, index) => (
            <circle
              key={arc.name}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke={`var(--chart-${(index % 5) + 1})`}
              strokeWidth={STROKE}
              strokeDasharray={`${arc.dash} ${CIRCUMFERENCE - arc.dash}`}
              strokeDashoffset={-arc.offset}
            />
          ))}
        </g>
      </svg>
      <ul className={styles.legend}>
        {languages.map((lang, index) => (
          <li key={lang.name} className={styles.legendItem}>
            <span
              className={styles.swatch}
              style={{ background: `var(--chart-${(index % 5) + 1})` }}
              aria-hidden="true"
            />
            <span className={styles.legendLabel}>
              {lang.name} · {lang.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
