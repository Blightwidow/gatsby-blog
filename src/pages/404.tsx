import * as React from "react"
import styled from "styled-components"

import { Head } from "../components/Head"

class NotFoundPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Wrapper role="main">
        <Head title="Page not found">
          <meta name="robots" content="noindex, nofolllow" />
        </Head>
        <Smiley>{":("}</Smiley>
      </Wrapper>
    )
  }
}

export default NotFoundPage

const Wrapper = styled.div`
  grid-area: content;
  padding: 0 24px;
`

const Smiley = styled.p`
  margin: 20px 10px 150px 30px;
  font-size: 100px;
`
