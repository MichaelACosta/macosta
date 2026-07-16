import React from "react"
import styled, { keyframes } from "styled-components"

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`

const Block = styled.div<{
  $width?: string
  $height?: string
  $circle?: boolean
}>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "16px"};
  border-radius: ${({ $circle }) => ($circle ? "50%" : "6px")};
  background: var(--surface-alt);
  animation: ${pulse} 1.6s ease-in-out infinite;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const StatsRow = styled.div`
  display: flex;
  gap: 28px;
`

export const GitCardSkeleton: React.FC = () => (
  <>
    <Stack>
      <StatsRow>
        <Block $width="70px" $height="28px" />
        <Block $width="70px" $height="28px" />
      </StatsRow>
      <Block $width="80%" $height="14px" />
    </Stack>
    <Block $width="130px" $height="130px" $circle />
  </>
)
