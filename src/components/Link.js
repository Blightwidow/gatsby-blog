import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Anchor = styled.a`
  color: ${props => props.theme.darkText};
  text-decoration: none;
  transition: border-bottom 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  font-weight: 600;
  border-bottom: ${props => (props.thick ? '4px' : '2px')} solid transparent;

  &:hover {
    border-bottom: ${props => `${(props.thick ? '4px' : '2px')} solid ${props.color || 'transparent'}`};
  }
`

const OUTSIDE_LINK_REGEX = /^https?:\/\/.+/

class Link extends React.Component {
  render() {
    const { to, color = 'transparent', children, thick, ...rest } = this.props
    return (
      <Anchor thick={thick} href={to} color={color} rel={OUTSIDE_LINK_REGEX.test(to) ? 'nofollow noopener' : null} {...rest}>
        {children}
      </Anchor>
    )
  }
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  thick: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
}

export default Link
