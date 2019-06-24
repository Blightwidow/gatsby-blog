import * as React from "react"
import styled from "styled-components"

import { Accent } from "../components/Accent"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { Page } from "../components/Page"
import { Text } from "../components/Text"
import { animated } from "../utils/animation"

import { GeolocationProvider } from "../providers/GeolocationProvider"
import { HolidayProvider } from "../providers/HolidayProvider"
import { Holiday } from "../types/geolocation"

interface HolidayPageState {
  isLoading: boolean
  nextHoliday: Holiday | null
  error: string | null
}

class HolidayPage extends React.PureComponent<{}, HolidayPageState> {
  private geoLocationProvider: GeolocationProvider
  private holidayProvider: HolidayProvider

  constructor(props: {}) {
    super(props)
    this.state = {
      error: null,
      isLoading: true,
      nextHoliday: null,
    }
    this.geoLocationProvider = new GeolocationProvider()
    this.holidayProvider = new HolidayProvider()
  }

  componentDidMount() {
    this.fetchNextHoliday()
  }

  async fetchNextHoliday() {
    try {
      let error = null
      const country = await this.geoLocationProvider.fetchLocation()
      const nextHoliday = await this.holidayProvider.fetchNextHoliday(country)

      if (nextHoliday === null) {
        error = "There seems to be no more holiday this year. Sorry."
      }

      this.setState({
        error,
        isLoading: false,
        nextHoliday,
      })
    } catch (error) {
      this.setState({
        error: error.toString(),
        isLoading: false,
        nextHoliday: null,
      })
    }
  }

  render(): React.ReactNode {
    const { isLoading, error, nextHoliday } = this.state

    return (
      <React.Fragment>
        <Head title="holidays" />
        <Header title=".holiday()" />
        <ContentWrapper>
          <PageHeading variant="primary">holiday()</PageHeading>
          <BodyWrapper>
            <Text as="h2">
              <Accent>Your next holiday is:</Accent>
            </Text>
            {isLoading && <Text>Loading</Text>}
            {error !== null && <Text>{error}</Text>}
            {nextHoliday !== null && (
              <HolidayWrapper>
                <Heading variant="secondary" as="p">
                  {nextHoliday.name} - {nextHoliday.date.toLocaleDateString()}
                </Heading>
                <Text>{nextHoliday.description}</Text>
              </HolidayWrapper>
            )}
          </BodyWrapper>
        </ContentWrapper>
      </React.Fragment>
    )
  }
}

export default HolidayPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const HolidayWrapper = styled.div`
  padding-top: 3rem;
`

const PageHeading = animated(Heading, "slide-in-top")

const BodyWrapper = animated("div", "slide-in-right")
