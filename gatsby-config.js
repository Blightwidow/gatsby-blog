const author = require("./src/data/raw/owner.json")

module.exports = {
  siteMetadata: {
    title: "Theo Dammaretz",
    author,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/ui/routes`,
        ignore: {
          patterns: [`!(?(*/)index.tsx)`],
          options: { nocase: true },
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet",
      options: {},
    },
    {
      resolve: "gatsby-plugin-styled-components",
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
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56224063-2",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {},
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        production: true,
      },
    },
  ],
}
