import React, { createContext, useContext, useEffect, useState } from "react"
import type { ThemeMode } from "./tokens"

const STORAGE_KEY = "macosta-theme"

interface ThemeModeContextValue {
  mode: ThemeMode
  toggle: () => void
  setMode: (mode: ThemeMode) => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
  undefined
)

const applyMode = (mode: ThemeMode) => {
  document.documentElement.setAttribute("data-theme", mode)
  window.localStorage.setItem(STORAGE_KEY, mode)
}

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Server/first client render always assumes "dark" (the site's identity
  // default). The blocking script in gatsby-ssr already set the real
  // data-theme attribute before paint; this effect only syncs React state
  // to it for the few places that need a real color value in JS (GitCard's
  // chart palette). It never causes a visible flash because it runs before
  // any theme-dependent JS-driven UI has data to render.
  const [mode, setModeState] = useState<ThemeMode>("dark")

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme")
    if (current === "light" || current === "dark") {
      setModeState(current)
    }
  }, [])

  const setMode = (next: ThemeMode) => {
    applyMode(next)
    setModeState(next)
  }

  const toggle = () => setMode(mode === "dark" ? "light" : "dark")

  return (
    <ThemeModeContext.Provider value={{ mode, toggle, setMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = (): ThemeModeContextValue => {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) {
    throw new Error("useThemeMode must be used within a ThemeModeProvider")
  }
  return ctx
}
