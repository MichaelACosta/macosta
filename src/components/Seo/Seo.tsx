import React from "react"
import { useStaticQuery, graphql, withPrefix } from "gatsby"
import type { Content } from "../../i18n/types"

interface SeoProps {
  content: Content
}

// Uses Gatsby's Head API (per-page, SSR-safe) rather than react-helmet —
// react-helmet's global singleton doesn't reliably sync with Gatsby 5's
// concurrent SSR renderer, so meta tags could leak between pages/languages.
const Seo: React.FC<SeoProps> = ({ content }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          author
        }
      }
    }
  `)

  const siteUrl: string = site.siteMetadata.siteUrl
  const canonicalPath = content.lang === "pt-BR" ? "/" : "/en/"
  const canonicalUrl = `${siteUrl}${withPrefix(canonicalPath)}`

  return (
    <>
      <title>{content.meta.title}</title>
      <meta name="description" content={content.meta.description} />
      <meta property="og:title" content={content.meta.title} />
      <meta property="og:description" content={content.meta.description} />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={content.meta.title} />
      <meta name="twitter:description" content={content.meta.description} />
      <link rel="canonical" href={canonicalUrl} />
      <link
        rel="alternate"
        hrefLang="pt-BR"
        href={`${siteUrl}${withPrefix("/")}`}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={`${siteUrl}${withPrefix("/en/")}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${siteUrl}${withPrefix("/")}`}
      />
    </>
  )
}

export default Seo
