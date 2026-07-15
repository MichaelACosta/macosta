import axios from "axios"

const GIT_URL = "https://api.github.com"

export const GITHUB_USERNAME = "MichaelACosta"

export interface GitHubUser {
  login: string
  followers: number
  public_repos: number
}

export interface GitHubRepo {
  language: string | null
}

export const getUser = (nameUser: string) =>
  axios.get<GitHubUser>(`${GIT_URL}/users/${nameUser}`)

export const getRepos = (nameUser: string) =>
  axios.get<GitHubRepo[]>(`${GIT_URL}/users/${nameUser}/repos?per_page=100`)
