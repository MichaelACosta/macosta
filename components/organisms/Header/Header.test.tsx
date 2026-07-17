import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { ThemeProvider } from "@/lib/theme/ThemeProvider"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { Header } from "./Header"

const dictionary = getDictionary("pt").nav

afterEach(() => {
  document.documentElement.removeAttribute("data-theme")
})

describe("Header", () => {
  it("renders an anchor per section, pointing at the section id", () => {
    render(
      <ThemeProvider>
        <Header dictionary={dictionary} homeLabel="Michael Alexandre Costa" locale="pt" />
      </ThemeProvider>
    )

    // { hidden: true } — the nav is display:none below the desktop breakpoint
    // (design spec §5 Header/mobile); jsdom doesn't evaluate that media query.
    expect(
      screen.getByRole("link", { name: "Impacto", hidden: true })
    ).toHaveAttribute("href", "#impact")
    expect(
      screen.getByRole("link", { name: "Formação", hidden: true })
    ).toHaveAttribute("href", "#education")
  })

  it("exposes theme and language toggles that are actually usable", async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider>
        <Header dictionary={dictionary} homeLabel="Michael Alexandre Costa" locale="pt" />
      </ThemeProvider>
    )

    const themeToggle = screen.getByRole("button", { name: "Alternar tema" })
    expect(themeToggle).toHaveAttribute("aria-pressed", "true")

    await user.click(themeToggle)
    expect(themeToggle).toHaveAttribute("aria-pressed", "false")

    expect(screen.getByRole("link", { name: "PT" })).toHaveAttribute(
      "aria-current",
      "true"
    )
    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute("href", "/en")
  })
})
