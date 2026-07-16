import React from "react"
import styled from "styled-components"
import { useThemeMode } from "../../theme/ThemeModeContext"

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: transparent;
  color: var(--text);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 16px;
  transition: transform 150ms;

  &:hover {
    transform: scale(1.05);
  }
`

export const ThemeToggle: React.FC<{ label: string }> = ({ label }) => {
  const { mode, toggle } = useThemeMode()

  return (
    <Button type="button" onClick={toggle} aria-label={label}>
      <span aria-hidden="true">{mode === "light" ? "☀️" : "🌙"}</span>
    </Button>
  )
}
