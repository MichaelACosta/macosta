import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { getDictionary } from "@/lib/i18n/getDictionary"
import * as githubClient from "@/lib/github/client"
import { GitHubProofSection } from "./GitHubProofSection"

const dictionary = getDictionary("en").githubProof

describe("GitHubProofSection", () => {
  it("shows loading skeletons before the GitHub data resolves", () => {
    vi.spyOn(githubClient, "fetchGitHubUser").mockReturnValue(new Promise(() => {}))
    vi.spyOn(githubClient, "fetchGitHubRepos").mockReturnValue(new Promise(() => {}))

    render(<GitHubProofSection dictionary={dictionary} />)

    expect(screen.getAllByRole("status")).toHaveLength(2)
  })

  it("renders stats and the language donut once data resolves", async () => {
    vi.spyOn(githubClient, "fetchGitHubUser").mockResolvedValue({
      followers: 12,
      following: 3,
      public_repos: 20,
    })
    vi.spyOn(githubClient, "fetchGitHubRepos").mockResolvedValue([
      { language: "TypeScript" },
      { language: "TypeScript" },
      { language: "Python" },
    ])

    render(<GitHubProofSection dictionary={dictionary} />)

    await waitFor(() => expect(screen.getByText("12")).toBeInTheDocument())
    expect(screen.getByText("3")).toBeInTheDocument()
    expect(screen.getByText("20")).toBeInTheDocument()
    expect(
      screen.getByRole("img", { name: dictionary.languagesLabel })
    ).toBeInTheDocument()
  })

  it("hides the whole section when the GitHub API fails, never breaking the page", async () => {
    vi.spyOn(githubClient, "fetchGitHubUser").mockRejectedValue(new Error("rate limited"))
    vi.spyOn(githubClient, "fetchGitHubRepos").mockResolvedValue([])

    const { container } = render(<GitHubProofSection dictionary={dictionary} />)

    await waitFor(() => expect(container).toBeEmptyDOMElement())
  })
})
