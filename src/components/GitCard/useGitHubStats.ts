import { useEffect, useState } from "react"
import { getUser, getRepos, GITHUB_USERNAME } from "../../Services/gitApi"
import { formatDataLanguages, LanguageDatum } from "./Utils"

type Status = "loading" | "success" | "error"

interface GitHubStats {
  status: Status
  followers: number | null
  repositories: number | null
  languages: LanguageDatum[]
}

export const useGitHubStats = (): GitHubStats => {
  const [stats, setStats] = useState<GitHubStats>({
    status: "loading",
    followers: null,
    repositories: null,
    languages: [],
  })

  useEffect(() => {
    let cancelled = false

    const fetchStats = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          getUser(GITHUB_USERNAME),
          getRepos(GITHUB_USERNAME),
        ])

        if (cancelled) return

        setStats({
          status: "success",
          followers: userRes.data.followers,
          repositories: userRes.data.public_repos,
          languages: formatDataLanguages(reposRes.data),
        })
      } catch (error) {
        if (cancelled) return
        console.error("Failed to fetch GitHub stats:", error)
        setStats((prev) => ({ ...prev, status: "error" }))
      }
    }

    fetchStats()

    return () => {
      cancelled = true
    }
  }, [])

  return stats
}
