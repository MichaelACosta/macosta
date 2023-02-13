import React, { useState, useEffect } from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import Seo from "../components/Seo/Seo"
import Profile from "../components/Profile"
import { GitCard } from "../components/GitCard"
import { getUser } from "../Services/gitApi"

const MY_USER_NAME = "MichaelACosta"

const IndexPage = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    getGitUser()
  }, [])

  const getGitUser = async () => {
    try {
      const user = await getUser(MY_USER_NAME)
      setUser(user?.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <Seo title="Profile" />
      <Profile user={user} />
      {user && <GitCard user={user} userName={user.login} />}
    </Wrapper>
  )
}

export default IndexPage
