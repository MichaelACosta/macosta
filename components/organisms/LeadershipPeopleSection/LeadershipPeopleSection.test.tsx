import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { LeadershipPeopleSection } from "./LeadershipPeopleSection"

describe("LeadershipPeopleSection", () => {
  it("renders the PDM badge and every bullet", () => {
    const dictionary = getDictionary("en").leadershipPeople
    render(<LeadershipPeopleSection dictionary={dictionary} />)

    expect(screen.getByRole("heading", { name: dictionary.title })).toBeInTheDocument()
    expect(screen.getByText(dictionary.badgePdm)).toBeInTheDocument()
    for (const item of dictionary.items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})
