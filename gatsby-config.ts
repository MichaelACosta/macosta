import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  pathPrefix: `/macosta`,
  siteMetadata: {
    title: `<Devs />`,
    description: `This page is a profile made with gatsby.`,
    author: `@MicahelACosta`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Ubuntu`,
            file: `https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap`,
          },
        ],
      },
    },
  ],
}

export default config
