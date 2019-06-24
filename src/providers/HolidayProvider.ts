import { CountryCode, Holiday } from "../types/geolocation"

export class HolidayProvider {
  static API_KEY = "c6b2f24fde42dbb629c40ba30328ad4510734356"
  static ENDPOINT = "https://calendarific.com/api/v2/holidays"

  async fetchNextHoliday(country: CountryCode): Promise<Holiday | null> {
    try {
      const year = new Date().getFullYear()
      const res = await fetch(
        `${HolidayProvider.ENDPOINT}?api_key=${HolidayProvider.API_KEY}&country=${country}&year=${year}&type=national`
      )

      if (!res.ok) {
        throw new Error(`HTTP ERROR ${res.status}`)
      }

      const data = await res.json()
      const holidays = data.response.holidays.map(
        (holiday: { name: string; description: string; date: { iso: string } }) =>
          new Holiday(holiday.date.iso, holiday.name, holiday.description)
      )

      return this.extractNextHoliday(holidays)
    } catch (error) {
      throw new Error("Error while fetching holiday data")
    }
  }

  private extractNextHoliday(holidays: Holiday[]): Holiday | null {
    const now = new Date()
    for (const holiday of holidays) {
      if (holiday.date > now) {
        return holiday
      }
    }

    return null
  }
}
