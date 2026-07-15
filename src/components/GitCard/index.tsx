import React from "react"
import styled from "styled-components"
import { Container, Indent, Section } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import { useGitHubStats } from "./useGitHubStats"
import { GitCardSkeleton } from "./Skeleton"
import { Chart } from "./Chart"
import type { Content } from "../../i18n/types"

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  box-shadow: var(--shadow);
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${media.sm} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

const Stats = styled.div`
  display: flex;
  gap: 28px;
`

const StatNumber = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 28px;
  color: var(--text);
`

const StatLabel = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
`

const Note = styled.p`
  color: var(--text-muted);
  font-size: 14px;
  margin: 16px 0 0;
`

const Fallback = styled.p`
  color: var(--text-muted);
  font-size: 14px;
  margin: 0;
`

export const GitCard: React.FC<{ content: Content }> = ({ content }) => {
  const stats = useGitHubStats()

  return (
    <Section id="git">
      <Container>
        <Reveal>
          <Indent>
            <SectionHeader num="08">{content.git.heading}</SectionHeader>

            {stats.status === "error" && (
              <Card>
                <Fallback>{content.git.fallback}</Fallback>
              </Card>
            )}

            {stats.status === "loading" && (
              <Card>
                <GitCardSkeleton />
              </Card>
            )}

            {stats.status === "success" && (
              <Card>
                <div>
                  <Stats>
                    <div>
                      <StatNumber>{stats.repositories}</StatNumber>
                      <StatLabel>{content.git.repositories}</StatLabel>
                    </div>
                    <div>
                      <StatNumber>{stats.followers}</StatNumber>
                      <StatLabel>{content.git.followers}</StatLabel>
                    </div>
                  </Stats>
                  <Note>{content.git.note}</Note>
                </div>
                <Chart
                  languages={stats.languages}
                  legendLabel={content.git.languagesLabel}
                />
              </Card>
            )}
          </Indent>
        </Reveal>
      </Container>
    </Section>
  )
}
