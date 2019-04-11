import * as React from "react"
import styled from "styled-components"

import { Background } from "../components/Background"
import { Footer } from "../components/Footer"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { AboutSection } from "../modules/index/AboutSection"
import { BlogSection } from "../modules/index/BlogSection"

class IndexPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Background />
        <Head />
        <Header />
        <ContentWrapper role="main">
          <BlogSection />
          <AboutSection />
        </ContentWrapper>
        <Footer />
      </React.Fragment>
    )
  }
}

export default IndexPage

const ContentWrapper = styled.main`
  grid-area: content;
  padding: 0 24px;
`
