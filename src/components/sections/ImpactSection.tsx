import React from "react"
import styled from "styled-components"
import { Container, Indent, Section, Label, CleanList } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import type { Content } from "../../i18n/types"

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 36px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  box-shadow: var(--shadow);
`

const StatNumber = styled.div`
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 1;
  color: var(--text);

  ${media.md} {
    font-size: 64px;
  }
`

const StatLabel = styled(Label)`
  display: block;
  margin-top: 8px;
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }
`

const JobTitle = styled.div`
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
  color: var(--text);
`

const Intro = styled.p`
  color: var(--text-muted);
  max-width: 60ch;
  margin: 0 0 24px;
`

export const ImpactSection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <Section id="impacto">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="02">{content.impact.heading}</SectionHeader>
          <Intro>{content.impact.intro}</Intro>
          <Stats>
            {content.impact.stats.map((stat) => (
              <StatCard key={stat.label}>
                <StatNumber>{stat.value}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </Stats>
          <TwoCol>
            <div>
              <JobTitle>{content.impact.ciAndT.title}</JobTitle>
              <CleanList>
                {content.impact.ciAndT.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </CleanList>
            </div>
            <div>
              <JobTitle>{content.impact.naveRs.title}</JobTitle>
              <CleanList>
                {content.impact.naveRs.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </CleanList>
            </div>
          </TwoCol>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
