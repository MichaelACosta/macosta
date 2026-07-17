import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { EducationSection } from "./EducationSection"

describe("EducationSection", () => {
  it("renders the three credential blocks", () => {
    const dictionary = getDictionary("pt").education
    render(<EducationSection dictionary={dictionary} />)

    expect(screen.getByText(dictionary.academic.title)).toBeInTheDocument()
    expect(screen.getByText(dictionary.certifications.title)).toBeInTheDocument()
    expect(screen.getByText(dictionary.languages.title)).toBeInTheDocument()
    expect(screen.getByText(dictionary.academic.items[0]!.label)).toBeInTheDocument()
  })
})
