import React from "react"
import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% {
    transform: rotateY(0deg) translateZ(30px);
  }
  25% {
    transform: rotateY(90deg) translateZ(30px);
  }
  50% {
    transform: rotateY(180deg) translateZ(30px);
  }
  75% {
    transform: rotateY(270deg) translateZ(30px);
  }
  100% {
    transform: rotateY(360deg) translateZ(30px);
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const SpinnerContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  perspective: 150px;
`

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #b0b2c3;
  border-radius: 50%;
  position: absolute;
  animation: ${spin} 2.5s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.8s;
  }
  &:nth-child(3) {
    animation-delay: 1.6s;
  }
`

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <SpinnerContainer>
        <Dot style={{ transform: "rotateY(0deg) translateZ(30px)" }} />
        <Dot style={{ transform: "rotateY(120deg) translateZ(30px)" }} />
        <Dot style={{ transform: "rotateY(240deg) translateZ(30px)" }} />
      </SpinnerContainer>
    </LoaderWrapper>
  )
}

export default Loader
