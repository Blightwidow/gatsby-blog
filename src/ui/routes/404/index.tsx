import * as React from "react"
import styled from "styled-components"

import { Head } from "../../components/Head"
import { Text } from "../../components/Text"

import { PageProps } from "../../../data/models/PageProps"

const NotFoundPage: React.FunctionComponent<PageProps> = ({ location }) => (
  <Wrapper role="main">
    <Head location={location.href} title="Page not found">
      <meta name="robots" content="noindex, nofolllow" />
    </Head>
    <Smiley>{":("}</Smiley>
    <Text>The page you requested does not exist or cannot be reach with your current network</Text>
  </Wrapper>
)

export default NotFoundPage

const Wrapper = styled.div`
  grid-area: content;
  padding: 0 24px;
  margin: 20px 10px 150px 30px;
`

const Smiley = styled(Text)`
  font-size: 100px;
`
