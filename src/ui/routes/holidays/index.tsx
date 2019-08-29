import { navigate } from "gatsby"
import * as React from "react"
import styled from "styled-components"

import { Head } from "../../components/Head"
import { Header } from "../../components/Header"
import { Heading } from "../../components/Heading"
import { Page } from "../../components/Page"
import { animated } from "../../styles/animated"

import { HolidayView } from "./components/HolidayView"

const HolidayPage: React.FunctionComponent = () => {
  const redirectToHome = () => navigate("/")

  // Disable page and redirect to Home
  React.useEffect(redirectToHome)

  return (
    <React.Fragment>
      <Head title="holidays" />
      <Header title=".holiday()" />
      <ContentWrapper>
        <PageHeading variant="primary">holiday()</PageHeading>
        <BodyWrapper>
          <HolidayView />
        </BodyWrapper>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default HolidayPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")

const BodyWrapper = animated("div", "slide-in-right")
