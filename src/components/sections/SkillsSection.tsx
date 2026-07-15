import React from "react"
import styled from "styled-components"
import { Container, Indent, Section, Chip, ChipRow } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import type { Content } from "../../i18n/types"

const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
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

export const SkillsSection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <Section id="skills">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="06">{content.skills.heading}</SectionHeader>
          <Skills>
            <div>
              <GroupTitle>{content.skills.management.title}</GroupTitle>
              <ChipRow>
                {content.skills.management.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipRow>
            </div>
            <div>
              <GroupTitle>{content.skills.technical.title}</GroupTitle>
              <ChipRow>
                {content.skills.technical.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipRow>
            </div>
          </Skills>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
