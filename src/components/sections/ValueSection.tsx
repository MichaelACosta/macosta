import React from "react"
import styled from "styled-components"
import { Container, Indent, Section } from "../layout"
import { SectionHeader } from "../SectionHeader"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import type { Content } from "../../i18n/types"

const Bullets = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
`

const Bullet = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: var(--text);
  font-size: 15px;
`

const Dot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 9px;
  flex-shrink: 0;
`

export const ValueSection: React.FC<{ content: Content }> = ({ content }) => (
  <Section id="valor">
    <Container>
      <Reveal>
        <Indent>
          <SectionHeader num="01">{content.value.heading}</SectionHeader>
          <Bullets>
            {content.value.items.map((item) => (
              <Bullet key={item}>
                <Dot aria-hidden="true" />
                <span>{item}</span>
              </Bullet>
            ))}
          </Bullets>
        </Indent>
      </Reveal>
    </Container>
  </Section>
)
