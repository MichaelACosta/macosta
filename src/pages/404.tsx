import React from "react"
import styled from "styled-components"
import { Link, HeadFC } from "gatsby"
import Seo from "../components/Seo/Seo"
import { Container } from "../components/layout"
import { pt } from "../i18n"

const Wrap = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: var(--text);
  margin: 0 0 12px;
`

const Sub = styled.p`
  color: var(--text-muted);
  margin: 0 0 20px;
`

const HomeLink = styled(Link)`
  color: var(--accent);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const notFoundContent = {
  ...pt,
  meta: { title: "404", description: "Página não encontrada." },
}

const NotFoundPage: React.FC = () => (
  <Wrap>
    <Container>
      <Title>Não encontramos o que você procura.</Title>
      <Sub>Page not found.</Sub>
      <HomeLink to="/">Voltar para o início / Back to home</HomeLink>
    </Container>
  </Wrap>
)

export const Head: HeadFC = () => <Seo content={notFoundContent} />

export default NotFoundPage
