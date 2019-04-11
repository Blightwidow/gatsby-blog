
import { createGlobalStyle } from "styled-components"


export const StyleBase = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  /* Disable JS warning as it is shitily placed */
  #gatsby-noscript {
    display: none;
  }

  /* Fonts */

  body {
    font-family: "Open Sans", "Segoe UI", Tahoma, sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: ${props => props.theme.base};
    background: ${props => props.theme.background};
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
    border-bottom: 8px solid ${props => props.theme.light};
    margin: 0 0 24px;
    opacity: 0.5;
  }

  ul {
    list-style-type: none;
  }
`