const author = require('./src/data/owner.json')

module.exports = {
  siteMetadata: {
    title: 'Theo Dammaretz',
    author
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-workbox',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@theo.dammaretz`,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
      },
    },
  ],
}
