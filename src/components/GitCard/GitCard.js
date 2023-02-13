import React, { useState, useEffect } from "react"
import { Row } from "../Grid"
import { Text } from "../Text"
import { getRepos } from "../../Services/gitApi"
import ChartContainer from "./ChartContainer"
import BoxInformation from "./BoxInformation"
import { formatDataLanguages } from "./Utils"

const GitCard = ({ user, userName }) => {
  const [language, setLanguage] = useState([])

  useEffect(() => {
    getGitRepos()
  }, [])

  const getGitRepos = async () => {
    try {
      const reposData = await getRepos(userName)
      setLanguage(formatDataLanguages(reposData?.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Row width={["100%", "70%"]} display="block" p={["0 0 15px 0", "0 20%"]}>
      <Row mt={["20px", "50px"]} display="flex" justifyContent="center">
        <Text variant={["medium", "big"]} color="#b0b2c3" fontWeight="600">
          GitHub Status
        </Text>
      </Row>
      <Row width="100%" mt={["10px", "0"]} display={["block", "flex"]}>
        <Row
          width={["100%", "50%"]}
          justifyContent={["space-between", "center"]}
          alignItems="center"
          mb={["5px", "0"]}
          mt={["10px", "0"]}
        >
          <BoxInformation value={user?.followers} label="Followers" />
          <BoxInformation value={user?.following} label="Following" />
          <BoxInformation value={user?.public_repos} label="Repositories" />
        </Row>
        <ChartContainer values={language} label="Most used languages" />
      </Row>
    </Row>
  )
}

export { GitCard }
