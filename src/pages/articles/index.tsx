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

const ArticlesPage: React.FunctionComponent<PageProps> = ({ location }) => (
  <React.Fragment>
    <Head location={location.href} title="articles" />
    <Header title=".articles()" />
    <ContentWrapper>
      <PageHeading variant="primary">articles()</PageHeading>
      <Text as="h2">
        <Accent>
          A random list of thoughts and articles I wrote for everyone to see.
        </Accent>
      </Text>
      <ProjectHeading variant="secondary" as="h3">
        Last articles
      </ProjectHeading>
      {/* <Text>
        <Link to="/articles/tech/homelab">My Homelab and its future</Link>
      </Text> */}
      {/* <Text>
        <Link to="/articles/hiking/gear">My Hiking gear for Solo hiking and travel</Link>
      </Text> */}
    </ContentWrapper>
  </React.Fragment>
)

export default ArticlesPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")

const ProjectHeading = styled(Heading)`
  padding-top: 2.5rem;

  @media (min-width: 1060px) {
    padding-top: 4rem;
  }
`
