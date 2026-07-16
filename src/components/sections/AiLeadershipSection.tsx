import React from "react"
import styled from "styled-components"
import { Container, Indent, Section, Chip, ChipRow } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import type { Content } from "../../i18n/types"

const AiSection = styled(Section)`
  background: var(--surface-alt);
`

const Intro = styled.p`
  color: var(--text-muted);
  max-width: 60ch;
  margin: 0;
`

const Seal = styled.span`
  display: inline-block;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  border: 1px solid var(--accent);
  border-radius: 999px;
  padding: 5px 12px;
  margin-top: 12px;
`

const ChipGroup = styled.div`
  margin-top: 16px;
`

const ChipGroupLabel = styled.h3`
  font-family: "Archivo", sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  margin: 0 0 8px;
`

const Case = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
  box-shadow: var(--shadow);
`

const CaseRow = styled.div`
  margin-bottom: 14px;

  &:last-child {
    margin-bottom: 0;
  }
`

const CaseKey = styled.span`
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  display: block;
  margin-bottom: 3px;
`

const CaseValue = styled.span`
  font-size: 15px;
  color: var(--text);
`

export const AiLeadershipSection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <AiSection id="ia">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="03">{content.ai.heading}</SectionHeader>
          <Intro>{content.ai.intro}</Intro>
          <Seal>{content.ai.seal}</Seal>

          <ChipGroup>
            <ChipGroupLabel>{content.ai.audiencesLabel}</ChipGroupLabel>
            <ChipRow>
              {content.ai.audiences.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipRow>
          </ChipGroup>

          <ChipGroup>
            <ChipGroupLabel>{content.ai.topicsLabel}</ChipGroupLabel>
            <ChipRow>
              {content.ai.topics.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipRow>
          </ChipGroup>

          <Case>
            <CaseRow>
              <CaseKey>{content.ai.case.name}</CaseKey>
              <CaseValue>{content.ai.case.lead}</CaseValue>
            </CaseRow>
            <CaseRow>
              <CaseKey>{content.ai.case.problemLabel}</CaseKey>
              <CaseValue>{content.ai.case.problem}</CaseValue>
            </CaseRow>
            <CaseRow>
              <CaseKey>{content.ai.case.originLabel}</CaseKey>
              <CaseValue>{content.ai.case.origin}</CaseValue>
            </CaseRow>
            <CaseRow>
              <CaseKey>{content.ai.case.solutionLabel}</CaseKey>
              <CaseValue>{content.ai.case.solution}</CaseValue>
            </CaseRow>
            <CaseRow>
              <CaseKey>{content.ai.case.statusLabel}</CaseKey>
              <CaseValue>{content.ai.case.status}</CaseValue>
            </CaseRow>
          </Case>
        </Indent>
      </Reveal>
    </Container>
  </AiSection>
)
