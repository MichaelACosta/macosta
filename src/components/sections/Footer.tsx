import React from "react"
import styled from "styled-components"
import { Container } from "../layout"
import type { Content } from "../../i18n/types"

const FooterEl = styled.footer`
  border-top: 1px solid var(--border);
  padding: 48px 0;
`

const Quote = styled.p`
  font-style: italic;
  color: var(--text-muted);
  max-width: 60ch;
  margin: 0 0 24px;
  padding-left: 16px;
  border-left: 2px solid var(--accent);
`

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 14px;
`

const ContactLink = styled.a`
  color: var(--text);
  text-decoration: none;

  &:hover {
    color: var(--accent);
  }
`

const LocationSpan = styled.span`
  color: var(--text-muted);
`

const Copyright = styled.div`
  margin-top: 24px;
  font-size: 13px;
  color: var(--text-muted);
`

export const Footer: React.FC<{ content: Content }> = ({ content }) => (
  <FooterEl>
    <Container>
      <Quote>&ldquo;{content.footer.quote}&rdquo;</Quote>
      <ContactRow>
        <ContactLink href="https://linkedin.com/in/michaelalexandrecosta">
          linkedin.com/in/michaelalexandrecosta
        </ContactLink>
        <ContactLink href="mailto:costa0ma@gmail.com">
          costa0ma@gmail.com
        </ContactLink>
        <LocationSpan>{content.footer.location}</LocationSpan>
      </ContactRow>
      <Copyright>{content.footer.copyright}</Copyright>
    </Container>
  </FooterEl>
)
