import styled from "styled-components"
import { media } from "../theme/breakpoints"

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 20px;

  ${media.md} {
    padding: 0 48px;
  }
`

export const Section = styled.section`
  padding: 64px 0;
  position: relative;

  ${media.md} {
    padding: 96px 0;
  }
`

export const Indent = styled.div`
  padding-left: 32px;

  ${media.md} {
    padding-left: 56px;
  }
`

export const Label = styled.span`
  font-family: "IBM Plex Mono", monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
`

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Chip = styled.span`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 13px;
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text);
  background: transparent;
`

export const CleanList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 8px;
    color: var(--text-muted);
    font-size: 15px;
  }

  li::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--accent);
  }
`
