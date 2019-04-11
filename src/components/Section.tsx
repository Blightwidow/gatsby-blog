import * as React from "react"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"

export interface SectionProps {
  children?: React.ReactChild | React.ReactChild[]
  className?: string
  id?: string
  titleKey: string
  primary: boolean
}

export class Section extends React.PureComponent<SectionProps> {
  render(): React.ReactChild {
    const { children, titleKey, primary, id, className } = this.props

    return (
      <Wrapper id={id} className={className}>
        <Header>
          <hr />
          <FormattedMessage id={titleKey}>{title => <Title primary={primary}>{title}</Title>}</FormattedMessage>
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

const Title = styled.h2<{ primary: boolean }>`
  font-size: 40px;
  color: ${props => (props.primary ? props.theme.primary : props.theme.base)};
  margin-bottom: 40px;

  @media (min-width: 1200px) {
    font-size: 64px;
  }
`
