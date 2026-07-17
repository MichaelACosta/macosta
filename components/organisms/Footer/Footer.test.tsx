import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { EMAIL_HREF, LINKEDIN_URL } from "@/lib/content/links"
import { Footer } from "./Footer"

describe("Footer", () => {
  it("renders contact links and the closing quote", () => {
    const dictionary = getDictionary("pt").footer
    render(<Footer dictionary={dictionary} headingLabel="Contato" />)

    expect(screen.getByRole("link", { name: dictionary.linkedInLabel })).toHaveAttribute(
      "href",
      LINKEDIN_URL
    )
    expect(screen.getByRole("link", { name: dictionary.emailLabel })).toHaveAttribute(
      "href",
      EMAIL_HREF
    )
    expect(screen.getByText(dictionary.location)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(dictionary.copyrightName))
    ).toBeInTheDocument()
  })
})
