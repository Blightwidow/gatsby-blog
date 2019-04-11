import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import { ThemeProvider } from "styled-components"

import { config, messages, localeData } from "./data/languages"
import { LocaleProvider, LocaleContext } from "./src/components/LocaleProvider"
import { defaultTheme } from "./src/utils/theme"

addLocaleData(localeData)

export const wrapWithLocaleProvier = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <LocaleProvider defaultLocale={config.defaultLocale} locales={config.locales}>
      <LocaleContext.Consumer>
        {localeState => (
          <IntlProvider key={localeState.currentLocale} locale={localeState.currentLocale} messages={messages[localeState.currentLocale]}>
            {element}
          </IntlProvider>
        )}
      </LocaleContext.Consumer>
    </LocaleProvider>
  </ThemeProvider>
)
