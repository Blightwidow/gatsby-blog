import { graphql, StaticQuery } from "gatsby"
import * as React from "react"

import { Layout } from "../components/Layout"
import { AboutSection } from "../sections/AboutSection"
import { BlogSection } from "../sections/BlogSection"

import { MediumPost } from "../types/MediumPost"
import { StaticQueryResult } from "../types/StaticQuery"

class IndexPage extends React.PureComponent {
  renderChildren(data: StaticQueryResult): React.ReactNode {
    return (
      <Layout siteMetadata={data.site.siteMetadata}>
        <BlogSection posts={data.allMediumPost.edges.map((x: { node: MediumPost }) => x.node)} />
        <AboutSection author={data.site.siteMetadata.author} />
      </Layout>
    )
  }

  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }
}

export default IndexPage

const query = graphql`
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
