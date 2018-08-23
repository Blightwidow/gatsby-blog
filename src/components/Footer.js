import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from './Link'

const Wrapper = styled.div`
  color: ${props => props.theme.lightText};
`

const Footer = ({ fullName, email, ...rest }) => (
  <Wrapper id="footer" {...rest}>
    <hr />
    <p>
      Email: <Link to={`mailto:${email}`}>{email}</Link>
    </p>
    <p>©2018 {fullName}</p>
  </Wrapper>
)

Footer.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default Footer
