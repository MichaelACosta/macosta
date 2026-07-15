import React from "react"
import styled from "styled-components"
import { Container, Indent, Section, CleanList } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import type { Content } from "../../i18n/types"

const Cred = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  ${media.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const GroupTitle = styled.h3`
  font-family: "Archivo", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 14px;
  color: var(--text-muted);
`

export const CredentialsSection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <Section id="cred">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="07">{content.credentials.heading}</SectionHeader>
          <Cred>
            <div>
              <GroupTitle>{content.credentials.education.title}</GroupTitle>
              <CleanList>
                {content.credentials.education.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </CleanList>
            </div>
            <div>
              <GroupTitle>
                {content.credentials.certifications.title}
              </GroupTitle>
              <CleanList>
                {content.credentials.certifications.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </CleanList>
            </div>
            <div>
              <GroupTitle>{content.credentials.languages.title}</GroupTitle>
              <CleanList>
                {content.credentials.languages.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </CleanList>
            </div>
          </Cred>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
