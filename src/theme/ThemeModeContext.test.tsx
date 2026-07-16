import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, beforeEach } from "vitest"
import { ThemeModeProvider } from "./ThemeModeContext"
import { ThemeToggle } from "../components/Header/ThemeToggle"

describe("ThemeToggle", () => {
  beforeEach(() => {
    window.localStorage.clear()
    document.documentElement.removeAttribute("data-theme")
  })

  it("toggles the theme, updates the DOM attribute and persists to localStorage", () => {
    render(
      <ThemeModeProvider>
        <ThemeToggle label="Switch theme" />
      </ThemeModeProvider>
    )

    const button = screen.getByRole("button", { name: "Switch theme" })

    fireEvent.click(button)
    expect(document.documentElement.getAttribute("data-theme")).toBe("light")
    expect(window.localStorage.getItem("macosta-theme")).toBe("light")

    fireEvent.click(button)
    expect(document.documentElement.getAttribute("data-theme")).toBe("dark")
    expect(window.localStorage.getItem("macosta-theme")).toBe("dark")
  })
})
