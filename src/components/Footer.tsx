import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { StaticQueryResult } from "../types/StaticQuery"
import { LanguageSelector } from "./LanguageSelector"
import { Link } from "./Link"

export class Footer extends React.PureComponent {
  renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const { email, fullName } = data.site.siteMetadata.author

    return (
      <Wrapper id="footer" role="contentinfo">
        <hr />
        <FlexWrapper>
          <div>
            <p>
              Email:{" "}
              <Link to={`mailto:${email}`} primary={false}>
                {email}
              </Link>
            </p>
            <p>2018 {fullName}</p>
          </div>
          <div>
            <LanguageSelector />
          </div>
        </FlexWrapper>
      </Wrapper>
    )
  }

  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }
}

const Wrapper = styled.footer`
  color: ${props => props.theme.light};
  grid-area: footer;
  padding: 0 24px;
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
