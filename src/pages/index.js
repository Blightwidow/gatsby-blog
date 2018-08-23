import React from 'react'
import { withTheme} from 'styled-components'

import AboutSection from '../sections/AboutSection'
import BlogSection from '../sections/BlogSection'

const IndexPage = ({ data, theme }) => (
  <div>
    <BlogSection color={theme.primary} posts={data.allMediumPost.edges.map(x => x.node)} />
    <AboutSection color={theme.secondary} author={data.site.siteMetadata.author} />
  </div>
)

export default withTheme(IndexPage)

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        author {
          skills
          introduction
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
