import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin-bottom: 60px;
  display: grid;

  @media (min-width: 500px) {
    grid-template-columns: [left-column] 25% [right-column] 75%;
    margin-bottom: 120px;
  }
`

const Header = styled.div`
  padding: 0 24px 0 0;
`

const Content = styled.div`
  @media (min-width: 500px) {
    padding-left: 24px;
  }
`

const Title = styled.h2`
  font-size: 40px;
  color: ${props => props.color};
  margin-bottom: 40px;

  @media (min-width: 1200px) {
    font-size: 64px;
  }
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
