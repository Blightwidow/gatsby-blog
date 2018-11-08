import * as React from "react"
import { default as styled, ThemeProvider } from "../utils/styled-components"

import { Background } from "../components/Background"
import { Footer } from "../components/Footer"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { AboutSection } from "../modules/index/AboutSection"
import { BlogSection } from "../modules/index/BlogSection"

import { darkTheme, defaultTheme, Theme } from "../utils/theme"

interface IndexPageState {
  theme: Theme
}

class IndexPage extends React.PureComponent<{}, IndexPageState> {
  constructor(props: {}) {
    super(props)
    this.state = { theme: defaultTheme }
  }

  handleThemeSwitch = () => {
    this.setState(prevState => ({
      theme: prevState.theme === defaultTheme ? darkTheme : defaultTheme,
    }))
  }

  render(): React.ReactNode {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Background primaryColor={this.state.theme.primary} />
          <Head />
          <Header />
          <ContentWrapper role="main">
            <BlogSection />
            <AboutSection />
          </ContentWrapper>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default IndexPage

const Wrapper = styled.div`
  display: grid;
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
`

const ContentWrapper = styled.div`
  grid-area: content;
  padding: 0 24px;
`