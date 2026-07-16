import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { LanguageSwitcher } from "./LanguageSwitcher"

describe("LanguageSwitcher", () => {
  it("links to / and /en/ and marks the active language", () => {
    render(<LanguageSwitcher lang="pt-BR" label="Switch language" />)

    const pt = screen.getByRole("link", { name: "PT" })
    const en = screen.getByRole("link", { name: "EN" })

    expect(pt).toHaveAttribute("href", "/")
    expect(en).toHaveAttribute("href", "/en/")
  })
})
