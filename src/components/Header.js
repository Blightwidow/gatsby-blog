import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import Link from './Link'
import Logo from './Logo'
import Accent from './Accent'

const Wrapper = styled.div`
  color: ${props => props.theme.lightText};
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`

const LinkList = styled.ul`
  display: flex;
`

const ListItem = styled.li`
  text-transform: uppercase;
  padding: 0 ${props => (props.last ? 0 : '40px')} 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Intro = styled.p`
  line-height: 26px;
  width: ${300 - 24}px;
`

const links = [{ to: '/#blog', label: 'Blog' }, { to: '/#about', label: 'About' }, { to: '/#contact', label: 'Contact' }]

const Header = ({ fullName, theme, ...rest }) => (
  <Wrapper id="header" {...rest}>
    <Nav>
      <Logo />
      <LinkList>
        {links.map((link, i) => (
          <ListItem key={i} last={i + 1 === links.length}>
            <Link to={link.to} color={theme.primary}>
              {link.label}
            </Link>
          </ListItem>
        ))}
      </LinkList>
    </Nav>
    <hr />
    <Intro className="header-intro">
      Personal Blog of <Accent>{fullName}</Accent>, Full Stack Engineer.
    </Intro>
  </Wrapper>
)

Header.propTypes = {
  fullName: PropTypes.string.isRequired,
}

export default withTheme(Header)
