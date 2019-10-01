import { Link as GatsbyLink } from "gatsby"
import * as React from "react"
import styled, { css } from "styled-components"

export interface LinkProps {
  to: string
  children?: React.ReactChild
  className?: string
}

export const Link: React.FunctionComponent<LinkProps> = ({ to, children, className, ...props }) => {
  const INTERNAL_LINK_REGEX = /^\/\/?.*/

  if (INTERNAL_LINK_REGEX.test(to)) {
    return (
      <InternalAnchor to={to} className={className} activeStyle={{ opacity: 0.5 }} {...props}>
        {children}
      </InternalAnchor>
    )
  }

  return (
    <Anchor href={to} rel="nofollow noopener" className={className} {...props}>
      {children}
    </Anchor>
  )
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
