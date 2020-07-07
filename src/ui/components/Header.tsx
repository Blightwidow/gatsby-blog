import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Accent } from "./Accent"
import { Link } from "./Link"
import { Text } from "./Text"

export interface HeaderProps {
  title: string
}

export const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const getLinks = React.useCallback(
    (email: string): { to: string; label: string }[] => [
      { to: "/", label: "is()" },
      { to: "/about", label: "about()" },
      { to: `mailto:${email}`, label: "contact()" },
    ],
    []
  )

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            fullName
            email
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="header" role="banner">
      <Nav role="navigation">
        <Text>
          <Accent>{title}</Accent>
        </Text>
        <LinkList>
          {getLinks(site.siteMetadata.author.email).map((link, i) => (
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
}

const Wrapper = styled.header`
  color: ${(props) => props.theme.colors.light};
  grid-area: header;
  width: 100%;
  padding: ${(props) => props.theme.fontSizes.xs} 0;
  background: linear-gradient(
    180deg,
    rgba(${(props) => props.theme.colors.backgroundRgb}, 0.3) 3rem,
    rgba(${(props) => props.theme.colors.backgroundRgb}, 0)
  );
  z-index: 10;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 96%;
  margin: 0 auto;

  @media (min-width: 80rem) {
    max-width: 80rem;
  }
`

const LinkList = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  padding: 0 ${(props) => props.theme.spaces.s};
  display: flex;
  align-items: center;
  justify-content: center;
`
