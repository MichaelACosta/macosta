import React from "react"
import styled from "styled-components"
import { Row, Column } from "../Grid"
import Loading from "../Loading"
import { Text } from "../Text"
import TextToBoby from "./TextToBody"

const Profile = ({ user }) => (
  <Row mt={["50px", "80px"]} display={["block", "flex"]}>
    {user && (
      <Column
        width={["auto", "50%"]}
        pl={["0", "5%"]}
        alignItems={["center", "left"]}
        justifyContent="center"
      >
        <Image
          src={user.avatar_url}
          alt={`Foto do ${user.name} tirada do GitHub`}
        />
      </Column>
    )}
    <Column width={["100%", "50%"]} pr={["0", "5%"]} justifyContent="center">
      <Text
        variant="big"
        color="#b0b2c3"
        textAlign="left"
        m="20px 0"
        fontWeight="600"
      >
        Meu nome é Michael Costa.
      </Text>
      <TextToBoby>
        Sou desenvolvedor front-end há mais de 5 anos e tenho experiência
        trabalhando com React e seus frameworks. Tenho participado de diversos
        projetos e tive a oportunidade de atuar como Tech Lead.
      </TextToBoby>
      <TextToBoby>
        Além disso, sou Mestre em Computação pela Universidade Federal de
        Pelotas e minha dissertação apresenta a proposta e criação de um
        escalonador para STM, entitulado Lups Transactional Memory Scheduler
        (LTMS), que melhorou o desempenho dos principais benchmarks. Esta
        experiência me permitiu aprofundar meus conhecimentos em computação
        paralela, algoritmos e técnicas de programação.
      </TextToBoby>
      <TextToBoby>
        Durante meus anos de experiência como desenvolvedor de front-end, tenho
        tido a chance de colaborar e contribuir para diversos projetos. Tenho
        trabalhado com React, JavaScript, TypeScript, HTML, CSS, Node e outras
        tecnologias. Além disso, também possuo conhecimento em arquitetura de
        software e design de interfaces.
      </TextToBoby>
      <TextToBoby>
        Minha experiência me permitiu desenvolver habilidades em liderança,
        trabalho em equipe, comunicação efetiva e tenho experiência em trabalho
        remoto. Também possuo experiência com gerenciamento de projetos e
        processos de desenvolvimento de software.
      </TextToBoby>
    </Column>
  </Row>
)

const Image = styled.img`
  border: 5px solid #000;
  border-radius: 20%;
  width: 50%;
`

export default Profile
