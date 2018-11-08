import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import styled from "../utils/styled-components"

import { StaticQueryResult } from "../types/StaticQuery"
import { Link } from "./Link"

export class Footer extends React.PureComponent {
  renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const { email, fullName } = data.site.siteMetadata.author

    return (
      <Wrapper role="contentinfo">
        <hr />
        <p>
          Email:{" "}
          <Link to={`mailto:${email}`} primary={false}>
            {email}
          </Link>
        </p>
        <p>2018 {fullName}</p>
      </Wrapper>
    )
  }

  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }
}

const Wrapper = styled.footer`
  color: ${props => props.theme.secondaryText};
  grid-area: footer;
  padding: 0 24px;
`

const query = graphql`
  query footerQuery {
    site {
      siteMetadata {
        author {
          fullName
          email
        }
      }
    }
  }
`
