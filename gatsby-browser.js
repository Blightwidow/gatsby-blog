import React from "react"

import { StyleBase } from "./src/components/StyleBase"
import { ThemeProvider } from "./src/utils/styled-components"
import { defaultTheme } from "./src/utils/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <StyleBase />
        {element}
      </React.Fragment>
    </ThemeProvider>
  )
}
