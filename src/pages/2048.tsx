import * as React from "react"
import { ThemeProvider } from "../utils/styled-components"

import { Head } from "../components/Head"
import { styleSheet } from "../components/StyleBase"
// import { Graph } from "../modules/data-leaks/graph"

import { darkTheme } from "../utils/theme"

class TTFEPage extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <div id="wrapper">
          <Style />
          <Head title="Evolution of data leaks" />
          <main role="main" id="content">
            <p>Hello world</p>
          </main>
        </div>
      </ThemeProvider>
    )
  }
}

export default TTFEPage

const Style = styleSheet`
  body {
    min-height: 100vh;
    min-width: 100%;
  }
`
