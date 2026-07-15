import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderWithProviders as render, screen, waitFor } from "../../test/utils"
import { pt } from "../../i18n"
import { GitCard } from "./index"
import * as gitApi from "../../Services/gitApi"

describe("GitCard", () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it("shows stats once the GitHub fetch succeeds", async () => {
    vi.spyOn(gitApi, "getUser").mockResolvedValue({
      data: { login: "MichaelACosta", followers: 64, public_repos: 128 },
    } as any)
    vi.spyOn(gitApi, "getRepos").mockResolvedValue({
      data: [
        { language: "TypeScript" },
        { language: "TypeScript" },
        { language: "JavaScript" },
      ],
    } as any)

    render(<GitCard content={pt} />)

    await waitFor(() => expect(screen.getByText("128")).toBeInTheDocument())
    expect(screen.getByText("64")).toBeInTheDocument()
  })

  it("falls back gracefully when the GitHub fetch fails", async () => {
    vi.spyOn(gitApi, "getUser").mockRejectedValue(new Error("network error"))
    vi.spyOn(gitApi, "getRepos").mockRejectedValue(new Error("network error"))
    vi.spyOn(console, "error").mockImplementation(() => {})

    render(<GitCard content={pt} />)

    await waitFor(() =>
      expect(screen.getByText(pt.git.fallback)).toBeInTheDocument()
    )
  })
})
