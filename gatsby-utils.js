import React from "react"
import { IntlProvider, addLocaleData } from "react-intl"
import { ThemeProvider } from "styled-components"

import { config, messages, localeData } from "./data/languages"
import { LocaleProvider, LocaleContext } from "./src/components/LocaleProvider"
import { StyleBase } from "./src/components/StyleBase"
import { defaultTheme } from "./src/utils/theme"

addLocaleData(localeData)

export const wrapWithLocaleProvider = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <LocaleProvider defaultLocale={config.defaultLocale} locales={config.locales}>
      <LocaleContext.Consumer>
        {localeState => (
          <IntlProvider key={localeState.currentLocale} locale={localeState.currentLocale} messages={messages[localeState.currentLocale]}>
            <React.Fragment>
              <StyleBase />
              {element}
            </React.Fragment>
          </IntlProvider>
        )}
      </LocaleContext.Consumer>
    </LocaleProvider>
  </ThemeProvider>
)

export const wrapContent = ({ element }) => (
  <div id="root">{element}</div>
)

