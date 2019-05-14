import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import styled, { css } from "styled-components"

export interface LinkProps {
  to: string
  children?: React.ReactChild
  className?: string
}

export class Link extends React.PureComponent<LinkProps> {
  private OUTSIDE_LINK_REGEX = /^[a-z]+:.+/

  render(): React.ReactChild {
    const { to, children, className } = this.props

    if (this.OUTSIDE_LINK_REGEX.test(to)) {
      return (
        <Anchor href={to} rel="nofollow noopener" className={className}>
          {children}
        </Anchor>
      )
    }

    return (
      <InternalAnchor to={to} className={className} activeStyle={{ opacity: 0.5 }}>
        {children}
      </InternalAnchor>
    )
  }
}

const linkStyle = css`
  color: ${props => props.theme.colors.light};
  text-decoration: none;
  transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Anchor = styled.a`
  ${linkStyle}
`

const InternalAnchor = styled(GatsbyLink)`
  ${linkStyle}
`
