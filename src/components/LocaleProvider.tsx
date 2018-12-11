import * as React from "react"

export const LocaleContext = React.createContext({
  currentLocale: "",
  locales: Array<string>(),
  setLocale: (locale: string) => {
    // Empty by design
  },
})

export interface LocaleProviderProps {
  defaultLocale: string
  locales: string[]
  children: React.ReactChild
}

export interface LocaleProviderState {
  currentLocale: string
  locales: string[]
  setLocale: (locale: string) => void
}

export class LocaleProvider extends React.PureComponent<LocaleProviderProps, LocaleProviderState> {
  constructor(props: LocaleProviderProps) {
    super(props)
    this.state = {
      currentLocale: this.getLocale(),
      locales: props.locales,
      setLocale: this.setLocale,
    }
  }

  setLocale = (locale: string) => {
    window.localStorage.setItem("locale", locale)
    this.setState({ currentLocale: locale })
    console.warn(`Locale switched to ${locale}`)
  }

  render(): React.ReactChild {
    const { children } = this.props
    return <LocaleContext.Provider value={this.state}>{children}</LocaleContext.Provider>
  }

  private getLocale = (): string => {
    const { locales, defaultLocale } = this.props

    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return defaultLocale
    }

    return (
      window.localStorage.getItem("locale") ||
      (locales.includes(navigator.language.slice(0, 2)) && navigator.language.slice(0, 2)) ||
      defaultLocale
    )
  }
}