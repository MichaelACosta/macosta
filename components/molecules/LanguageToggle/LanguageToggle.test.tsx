import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { LanguageToggle } from "./LanguageToggle"

describe("LanguageToggle", () => {
  it("renders both locales and marks the current one", () => {
    render(<LanguageToggle currentLocale="pt" ariaLabel="Alternar idioma" />)

    const pt = screen.getByRole("link", { name: "PT" })
    const en = screen.getByRole("link", { name: "EN" })

    expect(pt).toHaveAttribute("href", "/pt")
    expect(en).toHaveAttribute("href", "/en")
    expect(pt).toHaveAttribute("aria-current", "true")
    expect(en).not.toHaveAttribute("aria-current")
  })

  it("marks EN as current when currentLocale is en", () => {
    render(<LanguageToggle currentLocale="en" ariaLabel="Switch language" />)

    expect(screen.getByRole("link", { name: "EN" })).toHaveAttribute(
      "aria-current",
      "true"
    )
    expect(screen.getByRole("link", { name: "PT" })).not.toHaveAttribute(
      "aria-current"
    )
  })
})
