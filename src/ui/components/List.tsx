import * as React from "react"
import styled from "styled-components"

export interface ListProps {
  children: React.ReactChild[]
}

export const List: React.FunctionComponent<ListProps> = ({ children }) => {
  const renderChild = (element: React.ReactChild): React.ReactChild => {
    return <ElementWrapper>{element}</ElementWrapper>
  }

  return <Wrapper>{React.Children.map(children, renderChild)}</Wrapper>
}

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => props.theme.spaces.xxxl};
`

const ElementWrapper = styled.li`
  width: 100%;
  margin-bottom: ${props => props.theme.spaces.m};

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 1060px) {
    width: 33%;
  }
`
