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
      resolve: "gatsby-plugin-offline",
      options: {},
    },
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        production: true,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeDefaultDirectives: true,
        mergeStyleHashes: false,
        directives: {
          "style-src": "'self' 'unsafe-inline'",
          "font-src": "'self' data: *.cloudfront.net"
        }
      }
    }
  ],
}
