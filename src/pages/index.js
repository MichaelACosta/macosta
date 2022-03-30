import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Row, Column } from "../components/Grid"
import { Text } from "../components/Text"
import Wrapper from "../components/Wrapper/Wrapper"
import Seo from "../components/Seo/Seo"
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
      <Row mt={["50px", "80px"]} display={["block", "flex"]}>
        {user && (
          <Column
            width={["auto", "50%"]}
            pl={["0", "5%"]}
            alignItems={["center", "left"]}
          >
            <Image
              src={user.avatar_url}
              alt={`Imagem do git de ${user.name}`}
            />
          </Column>
        )}
        <Column
          width={["100%", "50%"]}
          pr={["0", "5%"]}
          justifyContent="center"
        >
          <Text
            variant="big"
            color="#b0b2c3"
            textAlign="left"
            m="20px 0"
            fontWeight="600"
          >
            Hi, I'm Michael Costa,
          </Text>
          <Text
            variant={["small", "regular"]}
            color="#f3f3f3"
            lineHeight="20px"
            textAlign="left"
            mb="15px"
          >
            Master in computing at UFPel and Front-end developer at CI&T, BR.
          </Text>
          <Text
            variant={["small", "regular"]}
            color="#f3f3f3"
            lineHeight="20px"
            textAlign="left"
            mb="15px"
          >
            I like to write code to optimize the performance of parallel systems
            and create web applications in my spare time.
          </Text>
          <Text
            variant={["small", "regular"]}
            color="#f3f3f3"
            lineHeight="20px"
            textAlign="left"
            mb="15px"
          >
            In my master's work was to propose and implement a scheduler for
            transactional memories in software (STM) called Lups Transactional
            Memory Scheduler (LTMS), in this work I raised and validated the
            hypothesis that a thread scheduler that obtains context about the
            execution of the application and of the hardware architecture used
            can reduce the number of aborts and the execution time of
            applications that use STMs.
          </Text>
        </Column>
      </Row>
      {user && <GitCard user={user} userName={user.login} />}
    </Wrapper>
  )
}

const Image = styled.img`
  border: 5px solid #000;
  border-radius: 20%;
  width: 50%;
`

export default IndexPage
