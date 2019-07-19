import * as React from "react"
import styled from "styled-components"

import { Accent } from "../../../components/Accent"
import { Heading } from "../../../components/Heading"
import { Text } from "../../../components/Text"

import { Holiday } from "../../../../data/models/Holiday"
import { GeolocationProvider } from "../../../../data/providers/GeolocationProvider"
import { HolidayProvider } from "../../../../data/providers/HolidayProvider"

export const HolidayView: React.FunctionComponent = () => {
  const geoLocationProvider = new GeolocationProvider()
  const holidayProvider = new HolidayProvider()

  const [error, setError] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [nextHoliday, setNextHoliday] = React.useState<Holiday | null>(null)

  const fetchNextHoliday = async () => {
    try {
      const country = await geoLocationProvider.fetchLocation()
      const apiHoliday = await holidayProvider.fetchNextHoliday(country)

      if (nextHoliday === null) {
        setError("There seems to be no more holiday this year. Sorry.")
      }

      setError(null)
      setNextHoliday(apiHoliday)
    } catch (e) {
      setError(e.toString())
      setNextHoliday(null)
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    fetchNextHoliday()
  })

  if (isLoading) {
    return <Text>Loading</Text>
  }

  if (error !== null) {
    return <Text>{error}</Text>
  }

  if (nextHoliday !== null) {
    return (
      <React.Fragment>
        <Text as="h2">
          <Accent>Your next holiday is:</Accent>
        </Text>{" "}
        <HolidayWrapper>
          <Heading variant="secondary" as="p">
            {nextHoliday.name} - {nextHoliday.date.toDateString()}
          </Heading>
          <Text>{nextHoliday.description}</Text>
        </HolidayWrapper>
      </React.Fragment>
    )
  }

  return null
}

const HolidayWrapper = styled.div`
  padding-top: 3rem;
`
