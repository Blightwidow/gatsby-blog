import * as React from "react"
import styled from "../utils/styled-components"

export interface SectionProps {
  children?: React.ReactChild | React.ReactChild[]
  className?: string
  id?: string
  title: string
  primary: boolean
}

export class Section extends React.PureComponent<SectionProps> {
  render(): React.ReactChild {
    const { children, title, primary, id, className } = this.props

    return (
      <Wrapper id={id} className={className}>
        <Header>
          <hr />
          <Title primary={primary}>{title}</Title>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    )
  }
}

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

const Title = styled<{ primary: boolean }, "h2">("h2")`
  font-size: 40px;
  color: ${props => (props.primary ? props.theme.primary : props.theme.primaryText)};
  margin-bottom: 40px;

  @media (min-width: 1200px) {
    font-size: 64px;
  }
`
