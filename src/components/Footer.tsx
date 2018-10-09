import * as React from "react"
import styled from "../utils/styled-components"

import { Link } from "./Link"

export interface FooterProps {
  fullName: string
  email: string
}

export class Footer extends React.PureComponent<FooterProps> {
  render(): React.ReactNode {
    const { fullName, email } = this.props

    return (
      <Wrapper id="footer">
        <hr />
        <p>
          Email: <Link to={`mailto:${email}`} primary={false} secondary={false}>{email}</Link>
        </p>
        <p>©2018 {fullName}</p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  color: ${props => props.theme.lightText};
`
