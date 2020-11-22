import React from "react"
import { ThemeProvider } from "styled-components"

import { Layout } from "./src/ui/components/Layout"
import { defaultTheme, futureSpaceTheme } from "./src/ui/styles/theme"

export const wrapWithProviders = ({ element }) => element

export const wrapContent = ({ element, props }) => {
  const THEME = {
    futurespace: futureSpaceTheme,
    DEFAULT: defaultTheme,
  }

  const [folder] = props.uri.match(/([^/]+)/) || []

  return (
    <ThemeProvider theme={THEME[folder] || THEME.DEFAULT}>
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}
