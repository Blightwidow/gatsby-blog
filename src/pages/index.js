import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import AboutSection from '../sections/AboutSection'
import BlogSection from '../sections/BlogSection'
import Layout from '../components/Layout'
import theme from '../utils/theme'

const IndexPage = ({ data }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout siteMetadata={data.site.siteMetadata}>
        <BlogSection color={theme.primary} posts={data.allMediumPost.edges.map(x => x.node)} />
        <AboutSection color={theme.secondary} author={data.site.siteMetadata.author} />
      </Layout>
    )}
  />
)

export default IndexPage

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        author {
          skills
          introduction
          fullName
          email
          experiences {
            period
            company
            title
          }
          socialLinks {
            to
            label
          }
        }
      }
    }
    allMediumPost(sort: { fields: [firstPublishedAt], order: DESC }, limit: 3) {
      edges {
        node {
          firstPublishedAt
          title
          virtuals {
            tags {
              name
            }
          }
          uniqueSlug
          author {
            username
          }
        }
      }
    }
  }
`
