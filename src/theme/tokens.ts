export type ThemeMode = "dark" | "light"

export const tokens: Record<ThemeMode, Record<string, string>> = {
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
    shadow: "none",
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
    shadow: "0 1px 3px rgba(20,33,61,0.08)",
  },
}

// Language donut palette per theme — never the reaviz defaults (design spec §5).
export const chartPalette: Record<ThemeMode, string[]> = {
  dark: ["#F2A33C", "#4C7FB5", "#6BA368", "#9AA5BC"],
  light: ["#C97E1A", "#3E6491", "#4C8A56", "#5A6478"],
}
