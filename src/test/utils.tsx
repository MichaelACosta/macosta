import React from "react"
import { render, RenderOptions } from "@testing-library/react"
import { ThemeModeProvider } from "../theme/ThemeModeContext"

const AllProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeModeProvider>{children}</ThemeModeProvider>

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: AllProviders, ...options })

export * from "@testing-library/react"
