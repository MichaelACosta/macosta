import React from "react"
import styled from "styled-components"
import { media } from "../theme/breakpoints"

interface SectionHeaderProps {
  num: string
  children: React.ReactNode
}

const Wrap = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 32px;
`

const Num = styled.span`
  font-family: "IBM Plex Mono", monospace;
  color: var(--accent);
  font-size: 13px;
`

const Heading = styled.h2`
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.01em;
  margin: 0;
  color: var(--text);

  ${media.md} {
    font-size: 32px;
  }
`

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  num,
  children,
}) => (
  <Wrap>
    <Num aria-hidden="true">{num}</Num>
    <Heading>{children}</Heading>
  </Wrap>
)
