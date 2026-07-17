import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { TrajectorySection } from "./TrajectorySection"

describe("TrajectorySection", () => {
  it("renders all four stops in order, with the CI&T subline only on the last one", () => {
    const dictionary = getDictionary("pt").trajectory
    render(<TrajectorySection dictionary={dictionary} />)

    const items = screen.getAllByRole("listitem")
    expect(items).toHaveLength(dictionary.stops.length)
    expect(items[0]).toHaveTextContent(dictionary.stops[0]!.name)
    expect(items[items.length - 1]).toHaveTextContent(
      dictionary.stops[dictionary.stops.length - 1]!.name
    )
    expect(screen.getByText(dictionary.ciAndTSubline)).toBeInTheDocument()
  })
})
