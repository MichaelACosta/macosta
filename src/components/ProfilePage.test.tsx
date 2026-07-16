import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderWithProviders as render, screen } from "../test/utils"
import { pt } from "../i18n"
import { ProfilePage } from "./ProfilePage"
import * as gitApi from "../Services/gitApi"

describe("ProfilePage", () => {
  beforeEach(() => {
    vi.spyOn(gitApi, "getUser").mockResolvedValue({
      data: { login: "MichaelACosta", followers: 1, public_repos: 1 },
    } as any)
    vi.spyOn(gitApi, "getRepos").mockResolvedValue({ data: [] } as any)
  })

  it("renders the full page without crashing, in Portuguese", () => {
    render(<ProfilePage content={pt} />)
    expect(
      screen.getByRole("heading", { name: pt.hero.name })
    ).toBeInTheDocument()
    expect(
      screen.getByRole("heading", { name: pt.value.heading })
    ).toBeInTheDocument()
    expect(screen.getByText(pt.footer.location)).toBeInTheDocument()
  })
})
