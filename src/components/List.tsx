import * as React from "react"
import styled from "styled-components"

export interface ListProps {
  children: React.ReactChild[]
}

export class List extends React.PureComponent<ListProps> {
  renderChild(element: React.ReactChild): React.ReactChild {
    return <ElementWrapper>{element}</ElementWrapper>
  }

  render(): React.ReactChild {
    const { children } = this.props

    return <Wrapper>{React.Children.map(children, this.renderChild)}</Wrapper>
  }
}

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-right: ${props => props.theme.spaces.l};
  margin-bottom: ${props => props.theme.spaces.xxxl};
`

const ElementWrapper = styled.li`
  flex-grow: 1;
  margin-bottom: ${props => props.theme.spaces.m};

  @media (min-width: 600px) {
    margin-bottom: ${props => props.theme.spaces.xl};
  }
`
