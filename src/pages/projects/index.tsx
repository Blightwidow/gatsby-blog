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
    <Head location={location.href} title="projects" />
    <Header title=".about()" />
    <ContentWrapper>
      <PageHeading variant="primary">projects()</PageHeading>
      <Text as="h2">
        <Accent>
          Here is a list of side projects I made for fun. They are tiny experiments aimed at improving my skills and testing stuff.
        </Accent>
      </Text>
      <ProjectHeading variant="secondary" as="h3">
        Web projects
      </ProjectHeading>
      <Text>
        <Link to="/tictactoe">TicTacToe against AI</Link>
      </Text>
      <Text>
        <Link to="/holidays">Next holiday for France</Link>
      </Text>
    </ContentWrapper>
  </React.Fragment>
)

export default IndexPage

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
