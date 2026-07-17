import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { LanguageDonut } from "./LanguageDonut"

describe("LanguageDonut", () => {
  it("renders an accessible chart with a legend entry per language", () => {
    render(
      <LanguageDonut
        label="Most used languages"
        languages={[
          { name: "TypeScript", percentage: 60 },
          { name: "Python", percentage: 40 },
        ]}
      />
    )

    expect(screen.getByRole("img", { name: "Most used languages" })).toBeInTheDocument()
    expect(screen.getByText("TypeScript · 60%")).toBeInTheDocument()
    expect(screen.getByText("Python · 40%")).toBeInTheDocument()
  })
})
