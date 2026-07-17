/**
 * Source of truth for theme tokens (docs/05-design-spec.md §2).
 * Keep in sync with the CSS custom properties in app/globals.css.
 */
export const themeTokens = {
  dark: {
    bg: "#0B1220",
    surface: "#131C2E",
    surfaceAlt: "#1B2740",
    text: "#E8ECF4",
    textMuted: "#9AA5BC",
    accent: "#F2A33C",
    accentContrast: "#0B1220",
    border: "#26314A",
    positive: "#3FB47F",
  },
  light: {
    bg: "#F7F8FA",
    surface: "#FFFFFF",
    surfaceAlt: "#EEF1F6",
    text: "#14213D",
    textMuted: "#5A6478",
    accent: "#C97E1A",
    accentContrast: "#FFFFFF",
    border: "#D8DEE9",
    positive: "#2E8B62",
  },
} as const

export type ThemeMode = keyof typeof themeTokens
export type ThemeTokenKey = keyof (typeof themeTokens)["dark"]

export const THEME_STORAGE_KEY = "macosta:theme"
export const THEME_MODES: ThemeMode[] = ["dark", "light"]

export const isThemeMode = (value: string | null): value is ThemeMode =>
  value === "dark" || value === "light"
