import React, { useState, useEffect } from "react"
import { PieChart, PieArcSeries } from "reaviz"
import { Row, Column } from "../Grid"
import { Text } from "../Text"
import { getRepos } from "../../Services/gitApi"

const formatDataLanguages = (reposData) => {
  const languages = reposData.map((repo) => repo.language)
  const languagesListFormated = languages.reduce((object, item) => {
    if (item === null) return object

    if (!object.some(({ key }) => key === item))
      object.push({ key: item, data: 1 })
    else {
      return object.map((language) =>
        language.key === item
          ? {
              key: language.key,
              data: language.data + 1,
            }
          : {
              key: language.key,
              data: language.data,
            }
      )
    }
    return object
  }, [])

  return languagesListFormated
}

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
          {user?.followers && (
            <Column width={["30%", "100%"]} m={["0", "0 auto"]}>
              <Text
                textAlign="center"
                color="#b0b2c3"
                variant={["regular", "medium"]}
                fontWeight="600"
              >
                {user?.followers}
              </Text>
              <Text
                textAlign="center"
                color="#f3f3f3"
                variant={["small", "regular"]}
              >
                Followers
              </Text>
            </Column>
          )}
          {user?.following && (
            <Column width={["30%", "100%"]} m={["0", "0 auto"]}>
              <Text
                textAlign="center"
                color="#b0b2c3"
                variant={["regular", "medium"]}
                fontWeight="600"
              >
                {user?.following}
              </Text>
              <Text
                textAlign="center"
                color="#f3f3f3"
                variant={["small", "regular"]}
              >
                Following
              </Text>
            </Column>
          )}
          {user?.public_repos && (
            <Column width={["30%", "100%"]} m={["0", "0 auto"]}>
              <Text
                textAlign="center"
                color="#b0b2c3"
                variant={["regular", "medium"]}
                fontWeight="600"
              >
                {user?.public_repos}
              </Text>
              <Text
                textAlign="center"
                color="#f3f3f3"
                variant={["small", "regular"]}
              >
                Repositories
              </Text>
            </Column>
          )}
        </Row>
        {language.length > 1 && (
          <Column width={["100%", "50%"]} alignItems="center">
            <PieChart
              width={350}
              height={250}
              data={language}
              series={
                <PieArcSeries
                  cornerRadius={4}
                  padAngle={0.02}
                  padRadius={200}
                  doughnut={true}
                />
              }
            />
            <Text
              textAlign="center"
              color="#f3f3f3"
              variant={["small", "regular"]}
            >
              Most used languages
            </Text>
          </Column>
        )}
      </Row>
    </Row>
  )
}

export { GitCard }
