import React from 'react'
import styled, { withTheme } from 'styled-components'
import PropTypes from 'prop-types'

import Section from '../../components/Section'
import BlogPost from './BlogPost'

const Wrapper = styled(Section)`
  font-size: 14px;
  
  @media (min-width: 450px) {
    font-size: inherit;
  }
`

const BlogSection = ({ color, theme, posts }) => (
  <Wrapper title="Blog" id="blog" color={color}>
    <h3>Latest Posts</h3>
    <ul>
      {posts.map((post, i) => (
        <BlogPost
          key={i}
          color={theme.primary}
          url={`https://medium.com/@${post.author.username}/${post.uniqueSlug}`}
          title={post.title}
          tags={post.virtuals.tags.map(x => x.name)}
          date={post.firstPublishedAt}
        />
      ))}
    </ul>
  </Wrapper>
)

BlogPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      uniqueSlug: PropTypes.string.isRequired,
      firstPublishedAt: PropTypes.string.isRequired,
      author: PropTypes.shape({ username: PropTypes.string.isRequired }).isRequired,
      virtuals: PropTypes.shape({ tags: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }).isRequired) }).isRequired,
    })
  ).isRequired,
}

export default withTheme(BlogSection)
