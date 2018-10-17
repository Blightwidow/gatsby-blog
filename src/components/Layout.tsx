import * as React from "react"
import { createGlobalStyle, default as styled, ThemeProvider } from "../utils/styled-components"

import { Background } from "../components/Background"
import { Footer } from "../components/Footer"
import { Head } from "../components/Head"
import { Header } from "../components/Header"

import { SiteMeta } from "../types/siteMeta"
import { defaultTheme } from "../utils/theme"

import "typeface-open-sans"
import "typeface-rubik"

export interface LayoutProps {
  children: React.ReactChild | React.ReactChild[]
  title?: string
}

export class Layout extends React.PureComponent<LayoutProps> {
  render(): React.ReactNode {
    const { children, title } = this.props
    return (
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyle />
          <Background />
          <Wrapper id="wrapper">
            <Head title={title} />
            <Header />
            <main role="main" id="content">
              {children}
            </main>
            <Footer />
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  /* Layout */

  #wrapper {
    display: grid;
    grid-template-rows: 250px 1fr 100px;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "content" "footer";
    -webkit-font-smoothing: antialiased;
  }

  #header {
    grid-area: header;
    padding: 40px 24px 0;
  }

  #content {
    grid-area: content;
    padding: 0 24px;
  }

  #footer {
    grid-area: footer;
    padding: 0 24px;
  }

  @media (min-width: 1200px) {
    #wrapper {
      grid-template-columns: auto 300px 900px auto;
      grid-template-areas: ". header header ." ". content content ." ". . footer .";
    }
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    #wrapper {
      grid-template-columns: auto 150px 500px auto;
      grid-template-areas: ". header header ." ". content content ." ". . footer .";
    }
  }

  /* Fonts */

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Rubik", sans-serif;
    font-weight: 300;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  /* Defaults */

  hr {
    width: 64px;
    border: 0;
    border-bottom: 8px solid rgba(51, 51, 51, 0.16);
    margin: 0 0 24px;
  }

  ul {
    list-style-type: none;
  }
`

const Wrapper = styled.div`
  color: ${props => props.theme.darkText};
`
