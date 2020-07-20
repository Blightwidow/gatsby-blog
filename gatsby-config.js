const path = require("path")
const author = require("./src/data/raw/owner.json")

module.exports = {
  siteMetadata: {
    title: "Theo Dammaretz",
    author,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `ui`, `medias`),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@routes": path.resolve(__dirname, "src/ui/routes"),
          "@medias": path.resolve(__dirname, "src/ui/medias"),
          "@components": path.resolve(__dirname, "src/ui/components"),
          "@styles": path.resolve(__dirname, "src/ui/styles"),
          "@data": path.resolve(__dirname, "src/data"),
        },
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: "gatsby-plugin-react-helmet",
      options: {},
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        production: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeDefaultDirectives: true,
        mergeStyleHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline'",
          "font-src": "'self' data: *.cloudfront.net",
          "img-src": "'self' data: *.cloudfront.net",
        },
      },
    },
  ],
}
