import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin-bottom: 120px;
  display: grid;
  grid-template-columns: [left-column] 25% [right-column] 75%;
`

const Header = styled.div`
  padding: 0 24px 0 0;
`

const Content = styled.div`
  padding-left: 24px;
`

const Title = styled.h2`
  font-size: 64px;
  color: ${props => props.color};
`

const Section = ({ children, title, color, ...rest }) => (
  <Wrapper {...rest}>
    <Header>
      <hr />
      <Title color={color}>{title}</Title>
    </Header>
    <Content>{children}</Content>
  </Wrapper>
)

Section.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Section
