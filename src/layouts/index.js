import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Particles from 'react-particles-js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

import theme from '../utils/theme'

const Wrapper = styled.div`
  color: ${props => props.theme.darkText};
`

injectGlobal`
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: auto;
    font-weight: 300;
    src: local('Rubik Light'), local('Rubik-Light'), url(https://fonts.gstatic.com/s/rubik/v7/iJWHBXyIfDnIV7Fqj2md8WA.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-display: auto;
    font-weight: 400;
    src: local('Rubik'), local('Rubik-Regular'), url(https://fonts.gstatic.com/s/rubik/v7/iJWKBXyIfDnIV7nBrXw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: auto;
    font-weight: 600;
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UNirkOUuhp.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-display: auto;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  * {
    margin: 0;
    padding: 0;
  }

  /* Layout */

  #wrapper {
    display: grid;
    grid-template-columns: auto [left-column] 300px [right-column] 900px auto;
    grid-template-rows: 250px 1fr 100px;
    grid-template-areas: '. header header .' '. content content .' '. . footer .';
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

  /* Fonts */

  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Rubik', sans-serif;
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

const Layout = ({ children, data }) => {
  const author = data.site.siteMetadata.author

  return (
    <ThemeProvider theme={theme}>
      <Wrapper id="wrapper">
        <Particles
          params={{
            particles: {
              number: {
                value: 4,
                density: {
                  enable: false,
                },
              },
              color: {
                value: '#ef476f',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#ef476f',
                },
                polygon: {
                  nb_sides: 4,
                },
                image: {
                  src: 'img/github.svg',
                  width: 1000,
                  height: 1000,
                },
              },
              opacity: {
                value: 0.03,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 435,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: false,
                },
                resize: true,
              },
            },
            retina_detect: true,
          }}
          style={{
            width: '100%',
            position: 'absolute',
            zIndex: "-1",
          }}
        />
        <Head data={data} />
        <Header fullName={author.fullName} />
        <div id="content">{children()}</div>
        <Footer fullName={author.fullName} email={author.email} />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        author {
          fullName
          email
        }
      }
    }
  }
`
