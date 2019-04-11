import React from "react"
import { FormattedDate } from "react-intl"
import styled from "styled-components"

import { Link } from "../../../components/Link"

export interface BlogPostProps {
  title: string
  tags: string[]
  date: string
  url: string
  last: boolean
}

export class BlogPost extends React.PureComponent<BlogPostProps> {
  render(): React.ReactNode {
    const { date, title, url, last, tags } = this.props
    return (
      <Wrapper last={last}>
        <Timestamp>
          — <FormattedDate value={date} year="numeric" month="long" day="numeric" />
        </Timestamp>
        <Anchor thick={true} to={url} primary={true}>
          {title}
        </Anchor>
        <Tags>{tags.reduce((acc, x) => acc.concat(`, ${x}`))}</Tags>
      </Wrapper>
    )
  }
}

const Wrapper = styled.li<{ last: boolean }>`
  margin-bottom: ${props => (props.last ? 0 : "48px")};
`

const Timestamp = styled.p`
  line-height: 24px;
  font-weight: 600;
  color: ${props => props.theme.primary};
`

const Anchor = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
`

const Tags = styled.p`
  margin-top: 10px;
  color: ${props => props.theme.light};
`
