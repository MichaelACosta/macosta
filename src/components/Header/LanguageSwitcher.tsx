import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import type { Lang } from "../../i18n/types"

const Wrap = styled.div`
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
`

const Option = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--text-muted)")};
  font-weight: ${({ $active }) => ($active ? 500 : 400)};

  &:hover {
    color: var(--text);
  }
`

const Sep = styled.span`
  color: var(--text-muted);
`

export const LanguageSwitcher: React.FC<{ lang: Lang; label: string }> = ({
  lang,
  label,
}) => (
  <Wrap role="group" aria-label={label}>
    <Option to="/" $active={lang === "pt-BR"}>
      PT
    </Option>
    <Sep aria-hidden="true">|</Sep>
    <Option to="/en/" $active={lang === "en"}>
      EN
    </Option>
  </Wrap>
)
