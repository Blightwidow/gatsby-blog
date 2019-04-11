import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"

import { StaticQueryResult } from "../types/StaticQuery"
import { Accent } from "./Accent"
import { Link } from "./Link"
import { Logo } from "./Logo"

const links = [{ to: "/#blog", key: "blog" }, { to: "/#about", key: "about" }, { to: "/#contact", key: "contact" }]

export interface HeaderProps {
  className?: string
}

export class Header extends React.PureComponent<HeaderProps> {
  renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const { className } = this.props
    return (
      <Wrapper id="header" className={className} role="banner">
        <Nav role="navigation">
          <Logo />
          <LinkList>
            {links.map((link, i) => (
              <ListItem key={i} last={i + 1 === links.length}>
                <Link to={link.to} primary={true}>
                  <FormattedMessage id={link.key} />
                </Link>
              </ListItem>
            ))}
          </LinkList>
        </Nav>
        <hr />
        <Intro className="header-intro">
          <FormattedMessage 
            id="header.intro"
            values={{
              name: <Accent primary={false}>{data.site.siteMetadata.author.fullName}</Accent>
            }}
          />
        </Intro>
      </Wrapper>
    )
  }

  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }
}

const Wrapper = styled.header`
  color: ${props => props.theme.light};
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

const ListItem = styled.li<{ last: boolean }>`
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
