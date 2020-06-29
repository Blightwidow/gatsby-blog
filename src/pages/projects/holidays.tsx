import * as React from "react"
import styled from "styled-components"

import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Heading } from "@components/Heading"
import { Page } from "@components/Page"
import { animated } from "@styles/animated"

import { HolidayView } from "@routes/holidays/components/HolidayView"

import { PageProps } from "@data/models/PageProps"

const HolidayPage: React.FunctionComponent<PageProps> = ({ location }) => (
  <React.Fragment>
    <Head location={location.href} title="holidays" />
    <Header title=".holiday()" />
    <ContentWrapper>
      <PageHeading variant="primary">holiday()</PageHeading>
      <HolidayView />
    </ContentWrapper>
  </React.Fragment>
)

export default HolidayPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")
