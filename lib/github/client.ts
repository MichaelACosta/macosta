const GITHUB_API = "https://api.github.com"

export interface GitHubUser {
  followers: number
  following: number
  public_repos: number
}

export interface GitHubRepo {
  language: string | null
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const response = await fetch(`${GITHUB_API}/users/${username}`)
  if (!response.ok) {
    throw new Error(`GitHub user request failed with status ${response.status}`)
  }
  return response.json() as Promise<GitHubUser>
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const response = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100`)
  if (!response.ok) {
    throw new Error(`GitHub repos request failed with status ${response.status}`)
  }
  return response.json() as Promise<GitHubRepo[]>
}
