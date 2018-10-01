import React from 'react'
import styled, { withTheme } from 'styled-components'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'

import Link from '../../components/Link'

const Wrapper = styled.li`
  margin-bottom: ${props => (props.last ? 0 : '48px')};
`

const Timestamp = styled.p`
  line-height: 24px;
  font-weight: 600;
  color: ${props => props.color};
`

const Anchor = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
`

const Tags = styled.p`
  margin-top: 10px;
  color: ${props => props.color};
`

const BlogPost = ({ date, title, url, color, last, tags, theme }) => (
  <Wrapper last={last}>
    <Timestamp color={color}>— {dayjs(date).format('DD MMM, YYYY')}</Timestamp>
    <Anchor thick to={url} color={color}>
      {title}
    </Anchor>
    <Tags color={theme.lightText}>{tags.reduce((acc, x) => acc.concat(`, ${x}`))}</Tags>
  </Wrapper>
)

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  last: PropTypes.bool,
}

export default withTheme(BlogPost)
