import React from "react"
import styled, { keyframes } from "styled-components"
import { media } from "../../theme/breakpoints"

const grow = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`

export const RailWrap = styled.div`
  position: relative;
`

const RailLine = styled.div<{ $animate: boolean }>`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--accent);
  opacity: 0.55;
  transform-origin: top;
  animation: ${({ $animate }) => ($animate ? grow : "none")} 600ms ease-out;

  ${media.md} {
    left: 48px;
  }
`

export const Rail: React.FC<{ animate?: boolean }> = ({ animate = true }) => (
  <RailLine aria-hidden="true" $animate={animate} />
)
