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

import React from "react"
import type { GatsbySSR } from "gatsby"
import { wrapWithProviders } from "./src/theme/wrapWithProviders"
import { themeInitScript } from "./src/theme/themeInitScript"

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) =>
  wrapWithProviders(element)

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPreBodyComponents,
  setHtmlAttributes,
  pathname,
}) => {
  setHtmlAttributes({ lang: pathname.startsWith("/en") ? "en" : "pt-BR" })

  setPreBodyComponents([
    <script
      key="theme-init"
      // Blocking, runs before first paint — sets data-theme on <html> from
      // localStorage/prefers-color-scheme so there is no flash of the wrong
      // theme. Safe outside React's tree: it only touches an attribute React
      // never renders itself.
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />,
  ])
}
