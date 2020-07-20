import React from "react"
import { ThemeProvider } from "styled-components"

import { Layout } from "./src/ui/components/Layout"
import { defaultTheme } from "./src/ui/styles/theme"

export const wrapWithProviders = ({ element }) => <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>

export const wrapContent = ({ element }) => <Layout>{element}</Layout>
