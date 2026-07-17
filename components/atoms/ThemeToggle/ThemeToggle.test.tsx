import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { ThemeProvider } from "@/lib/theme/ThemeProvider"
import { ThemeToggle } from "./ThemeToggle"

afterEach(() => {
  document.documentElement.removeAttribute("data-theme")
})

describe("ThemeToggle", () => {
  it("announces the toggle with an accessible label and reflects theme state", async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <ThemeToggle label="Alternar tema" />
      </ThemeProvider>
    )

    const toggle = screen.getByRole("button", { name: "Alternar tema" })
    expect(toggle).toHaveAttribute("aria-pressed", "true")

    await user.click(toggle)

    expect(toggle).toHaveAttribute("aria-pressed", "false")
    expect(document.documentElement.dataset.theme).toBe("light")
  })
})
