import React from "react"
import { createGlobalStyle } from "styled-components"

const StyleBase = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-weight: inherit;
  }

  /* Disable JS warning as it is shitily placed */
  #gatsby-noscript {
    display: none;
  }

  #root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 128px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "content";
    -webkit-font-smoothing: antialiased;

    /* @media (min-width: 1000px) {
      grid-template-columns: auto 300px 900px auto;
      grid-template-areas: ". header header ." ". content content ." ". . gap .";
    }

    @media (min-width: 600px) and (max-width: 1199px) {
      grid-template-columns: auto 150px 500px auto;
      grid-template-areas: ". header header ." ". content content ." ". . gap .";
    } */
  }

  /* Fonts */

  html, body {
    width: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizes.m};
    font-weight: normal;
    color: ${(props) => props.theme.colors.base};
    background: ${(props) => props.theme.colors.background};
  }

  /* Defaults */

  ul {
    list-style-type: none;
  }
`

export const Layout: React.FC = ({ children }) => (
  <div id="root">
    <StyleBase />
    {children}
  </div>
)
