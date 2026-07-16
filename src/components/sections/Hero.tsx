import React from "react"
import styled from "styled-components"
import { Container, Indent } from "../layout"
import { Reveal } from "../Reveal"
import { media } from "../../theme/breakpoints"
import type { Content } from "../../i18n/types"

const HeroSection = styled.section`
  padding-top: 56px;
  padding-bottom: 56px;

  ${media.md} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`

const HeroGrid = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 28px;
  align-items: flex-start;

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Eyebrow = styled.p`
  font-family: "IBM Plex Mono", monospace;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin: 0 0 16px;
  line-height: 1.5;
`

const Name = styled.h1`
  font-family: "Archivo", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
  color: var(--text);

  ${media.md} {
    font-size: 56px;
  }
`

const Sub = styled.p`
  color: var(--text-muted);
  font-size: 16px;
  max-width: 46ch;
  margin: 0 0 28px;

  ${media.md} {
    font-size: 17px;
  }
`

const CtaRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`

const Btn = styled.a<{ $variant: "primary" | "ghost" }>`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 15px;
  font-weight: 500;
  padding: 11px 20px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  transition: transform 150ms, background 150ms;
  background: ${({ $variant }) =>
    $variant === "primary" ? "var(--accent)" : "transparent"};
  color: ${({ $variant }) =>
    $variant === "primary" ? "var(--accent-contrast)" : "var(--text)"};
  border: ${({ $variant }) =>
    $variant === "primary" ? "none" : "1px solid var(--border)"};

  &:hover {
    transform: scale(1.02);
  }
`

const Avatar = styled.div`
  width: 132px;
  height: 132px;
  border-radius: 50%;
  flex-shrink: 0;
  background: linear-gradient(135deg, #1b2740, #2b3a5c);
  border: 2px solid var(--accent);
  display: grid;
  place-items: center;
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 40px;
  color: var(--accent);

  ${media.md} {
    width: 180px;
    height: 180px;
    font-size: 56px;
  }
`

export const Hero: React.FC<{ content: Content }> = ({ content }) => (
  <HeroSection id="top">
    <Container>
      <Reveal>
        <Indent>
          <HeroGrid>
            <div>
              <Eyebrow>{content.hero.eyebrow}</Eyebrow>
              <Name>{content.hero.name}</Name>
              <Sub>{content.hero.sub}</Sub>
              <CtaRow>
                <Btn
                  $variant="primary"
                  href="https://linkedin.com/in/michaelalexandrecosta"
                >
                  {content.hero.ctaLinkedin}
                </Btn>
                <Btn $variant="ghost" href="mailto:costa0ma@gmail.com">
                  {content.hero.ctaEmail}
                </Btn>
              </CtaRow>
            </div>
            <Avatar aria-hidden="true">MC</Avatar>
          </HeroGrid>
        </Indent>
      </Reveal>
    </Container>
  </HeroSection>
)
