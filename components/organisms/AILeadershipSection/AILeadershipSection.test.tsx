import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { AILeadershipSection } from "./AILeadershipSection"

describe("AILeadershipSection", () => {
  it("renders the chefIA case fields and the link-pending note", () => {
    const dictionary = getDictionary("pt").aiLeadership
    render(<AILeadershipSection dictionary={dictionary} />)

    expect(screen.getByRole("heading", { name: dictionary.title })).toBeInTheDocument()
    expect(screen.getByText(dictionary.case.name)).toBeInTheDocument()
    for (const field of dictionary.case.fields) {
      expect(screen.getByText(field.value)).toBeInTheDocument()
    }
    expect(screen.getByText(dictionary.case.linkPendingNote)).toBeInTheDocument()
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })
})
