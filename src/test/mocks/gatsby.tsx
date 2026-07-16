import React from "react"

export const Link: React.FC<
  { to: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>
    {children}
  </a>
)

export const navigate = () => {}

export const withPrefix = (path: string) => path

export const graphql = (_strings: TemplateStringsArray, ..._values: unknown[]) =>
  ""

export const useStaticQuery = () => ({
  site: {
    siteMetadata: {
      siteUrl: "https://michaelacosta.github.io",
      author: "@MichaelACosta",
    },
  },
})
