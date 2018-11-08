import * as React from "react"
import { default as styled } from "../utils/styled-components"

import { Background } from "../components/Background"
import { Footer } from "../components/Footer"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { AboutSection } from "../modules/index/AboutSection"
import { BlogSection } from "../modules/index/BlogSection"


class IndexPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Wrapper>
        <Background />
        <Head />
        <Header />
        <ContentWrapper role="main">
          <BlogSection />
          <AboutSection />
        </ContentWrapper>
        <Footer />
      </Wrapper>
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
