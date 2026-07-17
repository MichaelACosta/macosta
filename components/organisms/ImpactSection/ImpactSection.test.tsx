import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { ImpactSection } from "./ImpactSection"

describe("ImpactSection", () => {
  it("renders the stat cards and both bullet groups", () => {
    const dictionary = getDictionary("pt").impact
    render(<ImpactSection dictionary={dictionary} />)

    expect(screen.getByRole("heading", { name: dictionary.title })).toBeInTheDocument()
    for (const card of dictionary.statCards) {
      expect(screen.getByText(card.value)).toBeInTheDocument()
      expect(screen.getByText(card.label)).toBeInTheDocument()
    }
    expect(screen.getByText(dictionary.ciAndT.title)).toBeInTheDocument()
    expect(screen.getByText(dictionary.naveRs.title)).toBeInTheDocument()
  })
})
