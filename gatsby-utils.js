import React from "react"
import { ThemeProvider } from "styled-components"

import { StyleBase } from "./src/components/StyleBase"
import { defaultTheme } from "./src/utils/theme"

export const wrapWithLocaleProvider = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <React.Fragment>
      <StyleBase />
      {element}
    </React.Fragment>
  </ThemeProvider>
)

export const wrapContent = ({ element }) => <div id="root">{element}</div>
