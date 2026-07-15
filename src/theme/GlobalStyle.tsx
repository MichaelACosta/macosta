import { createGlobalStyle, css } from "styled-components"
import { tokens } from "./tokens"

const cssVars = (mode: keyof typeof tokens) => css`
  --bg: ${tokens[mode].bg};
  --surface: ${tokens[mode].surface};
  --surface-alt: ${tokens[mode].surfaceAlt};
  --text: ${tokens[mode].text};
  --text-muted: ${tokens[mode].textMuted};
  --accent: ${tokens[mode].accent};
  --accent-contrast: ${tokens[mode].accentContrast};
  --border: ${tokens[mode].border};
  --positive: ${tokens[mode].positive};
  --shadow: ${tokens[mode].shadow};
`

export const GlobalStyle = createGlobalStyle`
  :root {
    ${cssVars("dark")}
  }

  :root[data-theme="light"] {
    ${cssVars("light")}
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: "IBM Plex Sans", sans-serif;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    min-height: 100vh;
  }

  a {
    color: inherit;
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
