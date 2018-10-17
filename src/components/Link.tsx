import * as React from "react"
import styled from "../utils/styled-components"

export interface LinkProps {
  to: string
  primary: boolean
  secondary: boolean
  thick?: boolean
  children?: React.ReactChild
  className?: string
}

export class Link extends React.PureComponent<LinkProps> {
  render(): React.ReactChild {
    const { to, primary, secondary, children, thick, className } = this.props
    return (
      <Anchor
        thick={Boolean(thick)}
        href={to}
        primary={primary}
        secondary={secondary}
        rel={OUTSIDE_LINK_REGEX.test(to) ? "nofollow noopener" : undefined}
        className={className}
      >
        {children}
      </Anchor>
    )
  }
}

const Anchor = styled<{ thick: boolean; primary: boolean; secondary: boolean }, "a">("a")`
  color: ${props => props.theme.primaryText};
  text-decoration: none;
  transition: border-bottom 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  font-weight: 600;
  border-bottom: ${props => (props.thick ? "4px" : "2px")} solid transparent;

  &:hover {
    border-bottom: ${props =>
      `${props.thick ? "4px" : "2px"} solid ${
        props.primary ? props.theme.primary : props.secondary ? props.theme.secondary : "transparent"
      }`};
  }
`

const OUTSIDE_LINK_REGEX = /^https?:\/\/.+/
