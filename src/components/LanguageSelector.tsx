import * as React from "react"
import styled from "styled-components"

import { LocaleContext, LocaleProviderState } from "./LocaleProvider"

export interface LanguageSelectorState {
  isHydrated: boolean,
}
export class LanguageSelector extends React.PureComponent<{}, LanguageSelectorState> {
  constructor(props: LanguageSelector) {
    super(props)
    this.state = {
      isHydrated: false,
    }
  }

  componentDidMount() {
    this.setState({
      isHydrated: true,
    })
  }

  render(): React.ReactChild | null {
    if (!this.state.isHydrated) {
      return null
    }

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
