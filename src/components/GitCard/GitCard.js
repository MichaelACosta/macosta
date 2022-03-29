import React, { useState, useEffect } from "react"
import { LinearGauge, DiscreteLegend, DiscreteLegendEntry } from "reaviz"
import { Row, Column } from "../Grid"
import { Text } from "../Text"
import { getRepos } from "../../Services/gitApi"

const formatDataLanguages = (reposData) => {
  const languages = reposData.map((repo) => repo.language)
  const totalLanguagesNull = languages.filter(
    (language) => language === null
  ).length
  const totalLanguages = languages.length - totalLanguagesNull

  const languagesListFormated = languages.reduce((object, item) => {
    if (item === null) return object

    if (!object.some(({ key }) => key === item))
      object.push({ key: item, data: 1, percent: 100 / totalLanguages })
    else {
      return object.map((language) =>
        language.key === item
          ? {
              key: language.key,
              data: language.data + 1,
              percent: ((language.data + 1) * 100) / totalLanguages,
            }
          : {
              key: language.key,
              data: language.data,
              percent: language.percent,
            }
      )
    }
    return object
  }, [])

  return languagesListFormated
}

const GitCard = ({ user, userName }) => {
  const [repos, setRepos] = useState()
  const [language, setLanguage] = useState([])
  const [followers, setFollowers] = useState()
  const [following, setFollowing] = useState()

  useEffect(() => {
    getGitUser()
    getGitRepos()
  }, [])

  const getGitUser = async () => {
    try {
      setRepos(user?.public_repos)
      setFollowers(user?.followers)
      setFollowing(user?.following)
    } catch (error) {
      console.log(error)
    }
  }

  const getGitRepos = async () => {
    try {
      const reposData = await getRepos(userName)
      setLanguage(formatDataLanguages(reposData.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Row mt={["20px", "50px"]} display="flex" justifyContent="center">
        <Text variant="big" color="#f3f3f3" fontWeight="600">
          GitHub Status
        </Text>
      </Row>
      <Row mt={["10px", "30px"]} display="flex" justifyContent="center">
        {followers && (
          <Column width={["30%", "10%"]} m={["0 auto", "0"]}>
            <Text
              textAlign="center"
              color="#b0b2c3"
              variant="medium"
              fontWeight="600"
            >
              {followers}
            </Text>
            <Text textAlign="center" color="#f3f3f3">
              Followers
            </Text>
          </Column>
        )}
        {following && (
          <Column width={["30%", "10%"]} m={["0 auto", "0"]}>
            <Text
              textAlign="center"
              color="#b0b2c3"
              variant="medium"
              fontWeight="600"
            >
              {following}
            </Text>
            <Text textAlign="center" color="#f3f3f3">
              Following
            </Text>
          </Column>
        )}
        {repos && (
          <Column width={["30%", "10%"]} m={["0 auto", "0"]}>
            <Text
              textAlign="center"
              color="#b0b2c3"
              variant="medium"
              fontWeight="600"
            >
              {repos}
            </Text>
            <Text textAlign="center" color="#f3f3f3">
              Repositories
            </Text>
          </Column>
        )}
      </Row>
      {language.length > 1 && (
        <Row
          mt={["20px", "50px"]}
          pb={["20px", "10px", "0px"]}
          width="100%"
          display="flex"
          justifyContent="center"
        >
          <Column width="100%" m={["0 auto", "0"]} p="0 30%">
            <LinearGauge height="30px" width="100%" data={language} />
            <DiscreteLegend
              orientation="horizontal"
              entries={language.map((valor) => (
                <DiscreteLegendEntry
                  key={valor.key}
                  style={{
                    padding: "5px 5px",
                    color: "#f3f3f3",
                    width: "100%",
                  }}
                  label={`${valor.key} ${valor.percent.toFixed(2)}%`}
                />
              ))}
            />
            <Text textAlign="center" mt="10px" color="#f3f3f3">
              Most used languages
            </Text>
          </Column>
        </Row>
      )}
    </>
  )
}

export { GitCard }
