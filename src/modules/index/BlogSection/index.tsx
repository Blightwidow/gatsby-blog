
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import { Section } from "../../../components/Section"
import { MediumPost } from "../../../types/MediumPost"
import { StaticQueryResult } from "../../../types/StaticQuery"
import { BlogPost } from "./BlogPost"


export class BlogSection extends React.PureComponent {
  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }

  private renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const posts  = data.allMediumPost.edges.map((x: { node: MediumPost }) => x.node)

    return (
      <Wrapper title="Blog" id="blog" primary={true} secondary={false}>
        <h3>Latest Posts</h3>
        <ul>
          {posts.map((post, i) => (
            <BlogPost
              key={i}
              url={`https://medium.com/@${post.author.username}/${post.uniqueSlug}`}
              title={post.title}
              tags={post.virtuals.tags.map(x => x.name)}
              date={post.firstPublishedAt}
              last={i === posts.length - 1}
            />
          ))}
        </ul>
      </Wrapper>
    )
  }
}

const Wrapper = styled(Section)`
  font-size: 14px;

  @media (min-width: 500px) {
    font-size: inherit;
  }
`

const query = graphql`
  query indexBlogSectionQuery {
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