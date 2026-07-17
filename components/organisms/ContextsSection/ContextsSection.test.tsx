import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { ContextsSection } from "./ContextsSection"

describe("ContextsSection", () => {
  it("renders both competency columns", () => {
    const dictionary = getDictionary("pt").contexts
    render(<ContextsSection dictionary={dictionary} />)

    expect(screen.getByText(dictionary.managementAndAgile.title)).toBeInTheDocument()
    expect(screen.getByText(dictionary.technicalAndAi.title)).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
  })
})
