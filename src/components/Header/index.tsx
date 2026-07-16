import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Container } from "../layout"
import { media } from "../../theme/breakpoints"
import { ThemeToggle } from "./ThemeToggle"
import { LanguageSwitcher } from "./LanguageSwitcher"
import type { Content } from "../../i18n/types"

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 100;
  background: var(--accent);
  color: var(--accent-contrast);
  padding: 10px 16px;
  border-radius: 0 0 8px 0;

  &:focus {
    left: 0;
  }
`

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: 56px;
  background: color-mix(in srgb, var(--surface) 85%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
`

const BarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const Logo = styled(Link)`
  font-family: "Archivo", sans-serif;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: var(--text);
`

const Nav = styled.nav`
  display: none;
  gap: 24px;

  ${media.lg} {
    display: flex;
  }
`

const NavLink = styled.a`
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 150ms;

  &:hover {
    color: var(--text);
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Header: React.FC<{ content: Content }> = ({ content }) => {
  const homePath = content.lang === "pt-BR" ? "/" : "/en/"

  return (
    <>
      <SkipLink href="#main-content">{content.skipLink}</SkipLink>
      <Bar>
        <BarContainer>
          <Logo to={homePath} aria-label={content.hero.name}>
            MC
          </Logo>
          <Nav aria-label={content.skipLink}>
            <NavLink href="#valor">{content.nav.value}</NavLink>
            <NavLink href="#impacto">{content.nav.impact}</NavLink>
            <NavLink href="#ia">{content.nav.ai}</NavLink>
            <NavLink href="#trajetoria">{content.nav.journey}</NavLink>
          </Nav>
          <Controls>
            <LanguageSwitcher lang={content.lang} label={content.langSwitch.label} />
            <ThemeToggle label={content.themeToggle.label} />
          </Controls>
        </BarContainer>
      </Bar>
    </>
  )
}
