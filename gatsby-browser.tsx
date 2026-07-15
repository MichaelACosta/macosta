// "latin-" subset only — the site is PT-BR/EN only, and the unscoped .css
// files pull every subset (cyrillic, vietnamese, etc.), which Gatsby inlines
// as base64 into the critical CSS and bloats every page by hundreds of KB.
import "@fontsource/archivo/latin-600.css"
import "@fontsource/archivo/latin-700.css"
import "@fontsource/archivo/latin-800.css"
import "@fontsource/ibm-plex-sans/latin-400.css"
import "@fontsource/ibm-plex-sans/latin-500.css"
import "@fontsource/ibm-plex-sans/latin-600.css"
import "@fontsource/ibm-plex-mono/latin-400.css"
import "@fontsource/ibm-plex-mono/latin-500.css"

import type { GatsbyBrowser } from "gatsby"
import { wrapWithProviders } from "./src/theme/wrapWithProviders"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => wrapWithProviders(element)
