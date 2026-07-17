import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import { ThemeProvider } from "@/lib/theme/ThemeProvider"
import { getDictionary } from "@/lib/i18n/getDictionary"
import { HomeTemplate } from "./HomeTemplate"

vi.mock("@/lib/github/client", () => ({
  fetchGitHubUser: vi.fn().mockResolvedValue({ followers: 1, following: 1, public_repos: 1 }),
  fetchGitHubRepos: vi.fn().mockResolvedValue([{ language: "TypeScript" }]),
}))

afterEach(() => {
  document.documentElement.removeAttribute("data-theme")
})

describe("HomeTemplate", () => {
  it.each(["pt", "en"] as const)("renders every section heading for locale %s", (locale) => {
    const dictionary = getDictionary(locale)
    render(
      <ThemeProvider>
        <HomeTemplate dictionary={dictionary} locale={locale} />
      </ThemeProvider>
    )

    expect(screen.getByRole("heading", { level: 1, name: dictionary.hero.name })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.whereIAddValue.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.impact.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.aiLeadership.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.leadershipPeople.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.trajectory.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.contexts.title })).toBeInTheDocument()
    expect(screen.getByRole("heading", { name: dictionary.education.title })).toBeInTheDocument()
    expect(
      screen.getByText(dictionary.footer.closingQuote, { exact: false })
    ).toBeInTheDocument()
  })
})
