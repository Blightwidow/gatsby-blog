import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Accent } from "./Accent"
import { Link } from "./Link"
import { Text } from "./Text"

import { StaticQueryResult } from "../../data/models/StaticQuery"

export interface HeaderProps {
  title: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const getLinks = (email: string): Array<{ to: string; label: string }> => {
    return [{ to: "/", label: "is()" }, { to: "/about", label: "about()" }, { to: `mailto:${email}`, label: "contact()" }]
  }

  const renderChildren = (data: StaticQueryResult): React.ReactNode => (
    <Wrapper id="header" role="banner">
      <Nav role="navigation">
        <Text>
          <Accent>{title}</Accent>
        </Text>
        <LinkList>
          {getLinks(data.site.siteMetadata.author.email).map((link, i) => (
            <ListItem key={i}>
              <Text>
                <Link to={link.to}>{link.label}</Link>
              </Text>
            </ListItem>
          ))}
        </LinkList>
      </Nav>
    </Wrapper>
  )

  return <StaticQuery query={query} render={renderChildren} />
}

const Wrapper = styled.header`
  color: ${props => props.theme.colors.light};
  grid-area: header;
  padding: ${props => props.theme.fontSizes.xs} ${props => props.theme.fontSizes.m};
  background: linear-gradient(
    180deg,
    rgba(${props => props.theme.colors.backgroundRgb}, 0.3) 3rem,
    rgba(${props => props.theme.colors.backgroundRgb}, 0)
  );
  z-index: 10;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 80rem;
  margin: 0 auto;
`

const LinkList = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  padding: 0 0 0 ${props => props.theme.spaces.m};
  display: flex;
  align-items: center;
  justify-content: center;
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
