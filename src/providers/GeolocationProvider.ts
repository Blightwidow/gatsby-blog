import { CountryCode } from "../types/geolocation"

export class GeolocationProvider {
  static API_KEY = "206b2773d00f481ca26bdbe716e20ee2"
  static ENDPOINT = "https://api.ipgeolocation.io/ipgeo"

  async fetchLocation(): Promise<CountryCode> {
    try {
      const res = await fetch(`${GeolocationProvider.ENDPOINT}?apiKey=${GeolocationProvider.API_KEY}`)

      if (!res.ok) {
        throw new Error(`HTTP ERROR ${res.status}`)
      }

      const data = await res.json()
      return data.country_code2
    } catch (error) {
      throw new Error("Error while fetching geolocation data")
    }
  }
}
