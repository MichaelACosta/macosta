import React from "react"
import { describe, it, expect } from "vitest"
import { renderWithProviders as render, screen } from "../../test/utils"
import { pt } from "../../i18n"
import { Hero } from "./Hero"
import { ValueSection } from "./ValueSection"
import { ImpactSection } from "./ImpactSection"
import { AiLeadershipSection } from "./AiLeadershipSection"
import { PeopleSection } from "./PeopleSection"
import { JourneySection } from "./JourneySection"
import { SkillsSection } from "./SkillsSection"
import { CredentialsSection } from "./CredentialsSection"
import { Footer } from "./Footer"

describe("content sections", () => {
  it("renders Hero with the name and headline", () => {
    render(<Hero content={pt} />)
    expect(screen.getByText(pt.hero.name)).toBeInTheDocument()
  })

  it("renders ValueSection with all bullets", () => {
    render(<ValueSection content={pt} />)
    pt.value.items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it("renders ImpactSection with stat cards", () => {
    render(<ImpactSection content={pt} />)
    pt.impact.stats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
    })
  })

  it("renders AiLeadershipSection with the chefIA case", () => {
    render(<AiLeadershipSection content={pt} />)
    expect(screen.getByText(pt.ai.case.lead)).toBeInTheDocument()
  })

  it("renders PeopleSection with the PDM badge", () => {
    render(<PeopleSection content={pt} />)
    expect(screen.getByText(pt.people.badge)).toBeInTheDocument()
  })

  it("renders JourneySection with all stops", () => {
    render(<JourneySection content={pt} />)
    pt.journey.stops.forEach((stop) => {
      expect(screen.getByText(stop.company)).toBeInTheDocument()
    })
  })

  it("renders SkillsSection with both groups", () => {
    render(<SkillsSection content={pt} />)
    expect(screen.getByText(pt.skills.management.title)).toBeInTheDocument()
    expect(screen.getByText(pt.skills.technical.title)).toBeInTheDocument()
  })

  it("renders CredentialsSection with education, certifications and languages", () => {
    render(<CredentialsSection content={pt} />)
    expect(
      screen.getByText(pt.credentials.education.items[0])
    ).toBeInTheDocument()
  })

  it("renders Footer with the closing quote", () => {
    render(<Footer content={pt} />)
    expect(screen.getByText(pt.footer.location)).toBeInTheDocument()
  })
})
