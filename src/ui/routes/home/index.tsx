import * as React from "react"
import styled from "styled-components"

import { Accent } from "../../components/Accent"
import { Head } from "../../components/Head"
import { Header } from "../../components/Header"
import { Heading } from "../../components/Heading"
import { Link } from "../../components/Link"
import { Page } from "../../components/Page"
import { Text } from "../../components/Text"
import { animated } from "../../styles/animated"

const IndexPage: React.SFC = () => (
  <React.Fragment>
    <Head />
    <Header title=".is()" />
    <ContentWrapper>
      <PageHeading variant="primary">
        theo<Accent>.is()</Accent>
      </PageHeading>
      <BodyWrapper>
        <Text as="h2">
          <Accent>Theo Dammaretz</Accent>
        </Text>
        <Text>Frontend engineer, advocate and dreamer</Text>
        <Text>
          <Link to="/about">Learn more about me here</Link>
        </Text>
      </BodyWrapper>
    </ContentWrapper>
  </React.Fragment>
)

export default IndexPage

const ContentWrapper = styled(Page)`
  grid-area: content;
  padding-top: calc(50vh - 11.5rem);

  @media (min-width: 1060px) {
    margin: 0 25vw;
  }
`

const PageHeading = animated(Heading, "slide-in-top")

const BodyWrapper = animated("div", "slide-in-right")
