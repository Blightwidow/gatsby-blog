import * as React from "react"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"

import { Head } from "../components/Head"

class NotFoundPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Wrapper>
        <Head title="Page not found">
          <meta name="robots" content="noindex, nofolllow" />
        </Head>
        <FormattedMessage id="404.title" tagName="h1" />
        <FormattedMessage id="404.subtitle" tagName="p" />
        <Smiley>{":("}</Smiley>
      </Wrapper>
    )
  }
}

export default NotFoundPage

const Wrapper = styled.div`
  grid-area: content;
`

const Smiley = styled.p`
  margin: 20px 10px 150px 30px;
  font-size: 100px;
`
