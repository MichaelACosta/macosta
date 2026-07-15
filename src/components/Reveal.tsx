import React from "react"
import styled from "styled-components"
import { useRevealOnScroll } from "../hooks/useRevealOnScroll"

const Wrap = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : "12px")});
  transition: opacity 300ms ease-out, transform 300ms ease-out;
`

export const Reveal: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>()

  return (
    <Wrap ref={ref} $visible={visible}>
      {children}
    </Wrap>
  )
}
