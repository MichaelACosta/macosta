import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `/macosta`,
  siteMetadata: {
    title: `Michael Alexandre Costa`,
    description: `Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership`,
    siteUrl: `https://michaelacosta.github.io`,
    author: `@MichaelACosta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}

export default config
