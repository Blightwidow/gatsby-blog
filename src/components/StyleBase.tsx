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

  #root {
    display: grid;
    min-height: 100vh;
    grid-template-rows: 250px 1fr 100px;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "content" "footer";
    -webkit-font-smoothing: antialiased;

    @media (min-width: 1200px) {
      grid-template-columns: auto 300px 900px auto;
      grid-template-areas: ". header header ." ". content content ." ". . footer .";
    }

    @media (min-width: 600px) and (max-width: 1199px) {
      grid-template-columns: auto 150px 500px auto;
      grid-template-areas: ". header header ." ". content content ." ". . footer .";
    }
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
