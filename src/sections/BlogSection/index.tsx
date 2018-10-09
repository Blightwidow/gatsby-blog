import React from "react"
import styled from "styled-components"

import { Section } from "../../components/Section"
import { MediumPost } from "../../types/MediumPost"
import { BlogPost } from "./BlogPost"

export interface BlogSectionProps {
  posts: MediumPost[]
}

export class BlogSection extends React.PureComponent<BlogSectionProps> {
  render(): React.ReactNode {
    const { posts } = this.props
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
