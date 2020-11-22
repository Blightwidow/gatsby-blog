import * as React from "react"
import styled from "styled-components"

import { Accent } from "@components/Accent"
import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Heading } from "@components/Heading"
import { Link } from "@components/Link"
import { Page } from "@components/Page"
import { Text } from "@components/Text"
import { animated } from "@styles/animated"

import { PageProps } from "@data/models/PageProps"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => (
  <React.Fragment>
    <Head location={location.href} />
    <Header title=".is()" />
    <ContentWrapper>
      <PageHeading variant="primary">
        theo<Accent>.is()</Accent>
      </PageHeading>
      <Text as="h2">
        <Accent>Theo Dammaretz</Accent>
      </Text>
      <Caption>Frontend engineer, advocate and dreamer</Caption>
      <Text>
        <Link to="/about">About me</Link>
      </Text>
      <Text>
        <Link to="/projects">My Projects</Link>
      </Text>
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

const Caption = styled(Text)`
  margin-bottom: 3rem;
`

const PageHeading = animated(Heading, "slide-in-top")
