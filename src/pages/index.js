import React from "react"
import styled from "styled-components"
import { Row, Column } from "../components/Grid"
import Wrapper from "../components/Wrapper/Wrapper"
import Seo from "../components/Seo/Seo"

const IndexPage = () => (
  <Wrapper>
    <Seo title="Profile" />
    <Row mt={50} display={["block", "flex"]}>
      <Column
        width={["auto", "50%"]}
        pl={["0", "5%"]}
        pt={["0", "2%"]}
        alignItems={["center", "left"]}
      >
        <Image
          src="https://avatars2.githubusercontent.com/u/7400882?s=460&v=4"
          alt="MichaelACosta Icon"
        />
      </Column>
      <Column width={["100%", "50%"]} pr={["0", "5%"]}>
        <Title>Hi, I'm Michael Costa,</Title>
        <Text>
          Master in computing at UFPel and Front-end developer at CI&T, BR.
        </Text>
        <Text>
          I like to write code to optimize the performance of parallel systems
          and create web applications in my spare time.
        </Text>
        <Text>
          In my master's work was to propose and implement a scheduler for
          transactional memories in software (STM) called Lups Transactional
          Memory Scheduler (LTMS), in this work I raised and validated the
          hypothesis that a thread scheduler that obtains context about the
          execution of the application and of the hardware architecture used can
          reduce the number of aborts and the execution time of applications
          that use STMs.
        </Text>
      </Column>
    </Row>
  </Wrapper>
)

const Image = styled.img`
  border: 5px solid #000;
  border-radius: 20%;
  width: 50%;
`

const Text = styled.p`
  color: #f3f3f3;
  text-align: left;
  line-height: 20px;
`

const Title = styled.h1`
  color: #b0b2c3;
  text-align: left;
`

export default IndexPage
