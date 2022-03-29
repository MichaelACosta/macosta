import axios from "axios"

const GIT_URL = "https://api.github.com"

export const getUser = (nameUser) => axios.get(`${GIT_URL}/users/${nameUser}`)

export const getRepos = (nameUser) =>
  axios.get(`${GIT_URL}/users/${nameUser}/repos`)
