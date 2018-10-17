
import { createGlobalStyle } from "../utils/styled-components"

export const StyleBase = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  /* Fonts */

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: ${props => props.theme.primaryText};
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
    border-bottom: 8px solid rgba(51, 51, 51, 0.16);
    margin: 0 0 24px;
  }

  ul {
    list-style-type: none;
  }
`