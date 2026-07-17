import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { THEME_STORAGE_KEY } from "./tokens"
import { ThemeProvider, useTheme } from "./ThemeProvider"

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme}>
      current theme: {theme}
    </button>
  )
}

afterEach(() => {
  document.documentElement.removeAttribute("data-theme")
})

describe("ThemeProvider", () => {
  it("defaults to dark when the document has no theme attribute yet", () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )

    expect(screen.getByRole("button")).toHaveTextContent("current theme: dark")
  })

  it("adopts whatever theme the anti-flash script already set on <html>", () => {
    document.documentElement.dataset.theme = "light"

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )

    expect(screen.getByRole("button")).toHaveTextContent(
      "current theme: light"
    )
  })

  it("toggles the theme, updates <html data-theme>, and persists to localStorage", async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    )

    await user.click(screen.getByRole("button"))

    expect(screen.getByRole("button")).toHaveTextContent(
      "current theme: light"
    )
    expect(document.documentElement.dataset.theme).toBe("light")
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("light")

    await user.click(screen.getByRole("button"))

    expect(screen.getByRole("button")).toHaveTextContent("current theme: dark")
    expect(document.documentElement.dataset.theme).toBe("dark")
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark")
  })
})
