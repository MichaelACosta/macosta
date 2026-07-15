import React from "react"
import styled from "styled-components"
import { Container, Indent, Section, CleanList } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import type { Content } from "../../i18n/types"

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 15px;
  margin: 10px 0;
`

const List = styled(CleanList)`
  margin-top: 10px;
`

export const PeopleSection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <Section id="pessoas">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="04">{content.people.heading}</SectionHeader>
          <Badge>
            <span aria-hidden="true">★</span>
            <span>{content.people.badge}</span>
          </Badge>
          <List>
            {content.people.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
