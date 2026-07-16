import React from "react"
import { GlobalStyle } from "./GlobalStyle"
import { ThemeModeProvider } from "./ThemeModeContext"

export const wrapWithProviders = (element: React.ReactNode): React.ReactNode => (
  <ThemeModeProvider>
    <GlobalStyle />
    {element}
  </ThemeModeProvider>
)
