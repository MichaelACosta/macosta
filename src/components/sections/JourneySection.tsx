import React from "react"
import styled from "styled-components"
import { Container, Indent, Section } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import type { Content } from "../../i18n/types"

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

const Stop = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent);
    border: 3px solid var(--bg);
  }
`

const Company = styled.div`
  font-family: "Archivo", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: var(--text);
`

const Meta = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
`

const SubStop = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: var(--text-muted);
`

export const JourneySection: React.FC<{ content: Content }> = ({
  content,
}) => (
  <Section id="trajetoria">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="05">{content.journey.heading}</SectionHeader>
          <Timeline>
            {content.journey.stops.map((stop) => (
              <Stop key={stop.company}>
                <Company>{stop.company}</Company>
                <Meta>{stop.role}</Meta>
                {stop.sub && <SubStop>{stop.sub}</SubStop>}
              </Stop>
            ))}
          </Timeline>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
