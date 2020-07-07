const path = require("path")
const author = require("./src/data/raw/owner.json")

module.exports = {
  siteMetadata: {
    title: "Theo Dammaretz",
    author,
  },
  plugins: [
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
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        production: true,
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
      options: {
        // headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [
          'Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"',
          'Referrer-Policy = "no-referrer"',
          'X-Content-Type-Options = "nosniff"',
          'X-Frame-Options = "sameorigin"',
          'X-XSS-Protection = "1"',
        ], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        // mergeSecurityHeaders: true, // boolean to turn off the default security headers
        // mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        // mergeCachingHeaders: true, // boolean to turn off the default caching headers
        // transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        // generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
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
          "font-src": "'self' data: *.cloudfront.net",
          "img-src": "'self' data: *.cloudfront.net",
        },
      },
    },
  ],
}
