import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import Wrapper from "../components/Wrapper/Wrapper"
import Seo from "../components/Seo/Seo"

const IndexPage = () => (
  <Wrapper>
    <Seo title="Profile" />
    <RowBox center="xs" middle="xs">
      <Col xs={12} sm={4}>
        <Image
          src="https://avatars2.githubusercontent.com/u/7400882?s=460&v=4"
          alt="MichaelACosta Icon"
        />
      </Col>
      <Col xs={12} sm={4}>
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
      </Col>
    </RowBox>
  </Wrapper>
)

const Image = styled.img`
  border: 5px solid #000;
  border-radius: 20%;
  width: 60%;
`

const RowBox = styled(Row)`
  margin-top: 50px;
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
