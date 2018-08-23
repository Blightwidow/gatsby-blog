import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Accent = styled.span`
  color: ${props => props.color || props.theme.darkText};
`

Accent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
  color: PropTypes.string
}

export default Accent
