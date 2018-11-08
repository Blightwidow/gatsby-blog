import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import styled, { withTheme } from "../utils/styled-components"

import { StaticQueryResult } from "../types/StaticQuery"
import { Accent } from "./Accent"
import { Link } from "./Link"
import { Logo } from "./Logo"

const links = [{ to: "/#blog", label: "Blog" }, { to: "/#about", label: "About" }, { to: "/#contact", label: "Contact" }]

export interface HeaderProps {
  className?: string
}

export class Header extends React.PureComponent<HeaderProps> {
  renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const { className } = this.props
    return (
      <Wrapper className={className} role="banner">
        <Nav role="navigation">
          <Logo />
          <LinkList>
            {links.map((link, i) => (
              <ListItem key={i} last={i + 1 === links.length}>
                <Link to={link.to} primary={true}>
                  {link.label}
                </Link>
              </ListItem>
            ))}
          </LinkList>
        </Nav>
        <hr />
        <Intro className="header-intro">
          Personal Blog of <Accent primary={false}>{data.site.siteMetadata.author.fullName}</Accent>, Full Stack Engineer.
        </Intro>
      </Wrapper>
    )
  }

  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }
}

const Wrapper = styled.header`
  color: ${props => props.theme.secondaryText};
  grid-area: header;
  padding: 40px 24px 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const LinkList = styled.ul`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

const ListItem = styled<{ last: boolean }, "li">("li")`
  text-transform: uppercase;
  padding: 0 ${props => (props.last ? 0 : "40px")} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Intro = styled.p`
  line-height: 26px;
  width: 75%;

  @media (min-width: 500px) {
    width: 25%;
  }
`

const query = graphql`
  query headerQuery {
    site {
      siteMetadata {
        author {
          fullName
          email
        }
      }
    }
  }
`
