import * as React from "react"
import styled from "../utils/styled-components"

export class Logo extends React.PureComponent {
  render(): React.ReactChild {
    return <PageTitle>Theo Dammaretz</PageTitle>
  }
}

const PageTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
`
