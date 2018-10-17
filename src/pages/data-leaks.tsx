import * as React from "react"
import { createGlobalStyle, ThemeProvider } from "../utils/styled-components"

import { styleSheet } from "../components/StyleBase"

import { darkTheme } from "../utils/theme"

class IndexPage extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div id="wrapper">
          <Style />
          <LayoutStyle />
          <main role="main" id="content">
            {/* Content */}
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default IndexPage

const Style = styleSheet`
`

const LayoutStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    min-width: 100%;
  }
`
