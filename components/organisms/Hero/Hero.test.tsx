import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { EMAIL_HREF, LINKEDIN_URL } from "@/lib/content/links"
import { Hero } from "./Hero"

describe("Hero", () => {
  it("renders the name as the main heading with working CTAs", () => {
    const dictionary = getDictionary("pt").hero
    render(<Hero dictionary={dictionary} />)

    expect(
      screen.getByRole("heading", { level: 1, name: dictionary.name })
    ).toBeInTheDocument()
    expect(screen.getByText(dictionary.headline)).toBeInTheDocument()
    expect(screen.getByText(dictionary.subtitle)).toBeInTheDocument()

    expect(screen.getByRole("link", { name: dictionary.ctaLinkedIn })).toHaveAttribute(
      "href",
      LINKEDIN_URL
    )
    expect(screen.getByRole("link", { name: dictionary.ctaEmail })).toHaveAttribute(
      "href",
      EMAIL_HREF
    )
  })
})
