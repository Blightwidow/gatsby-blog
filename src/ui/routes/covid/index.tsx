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

import { PageProps } from "../../../data/models/PageProps"

const CovidPage: React.FunctionComponent<PageProps> = ({ location }) => (
  <React.Fragment>
    <Head location={location.href} title="covid-19" />
    <Header title=".covid-19()" />
    <ContentWrapper>
      <PageHeading variant="primary">covid-19()</PageHeading>
      <BodyWrapper>
        <Text as="h2">
          <Accent>In order to get out, you need to fill a form. Find an editable form below. Then save it and edit</Accent>
        </Text>
        <Link to="/attestation-covid.pdf">Click here to download</Link>
      </BodyWrapper>
    </ContentWrapper>
  </React.Fragment>
)

export default CovidPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")

const BodyWrapper = animated("div", "slide-in-right")
