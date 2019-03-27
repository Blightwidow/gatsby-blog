import * as React from "react"
import styled from "../utils/styled-components"

import { LocaleContext, LocaleProviderState } from "./LocaleProvider"

export class LanguageSelector extends React.PureComponent {
  render(): React.ReactChild {
    return (
      <LocaleContext.Consumer>
        {(localeState: LocaleProviderState): React.ReactNode =>
          localeState.locales.map((locale, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span> | </span>}
              <LocaleSpan onClick={() => localeState.setLocale(locale)} selected={locale === localeState.currentLocale}>
                {locale.toUpperCase()}
              </LocaleSpan>
            </React.Fragment>
          ))
        }
      </LocaleContext.Consumer>
    )
  }
}

const LocaleSpan = styled.span<{ selected: boolean }>`
  font-weight: ${props => (props.selected ? "bold" : "normal")};
  display: inline-block;
  width: 1.2rem;
  text-align: center;
  cursor: pointer;
`
