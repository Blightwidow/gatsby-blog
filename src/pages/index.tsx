import * as React from "react"

import { Layout } from "../components/Layout"
import { AboutSection } from "../sections/AboutSection"
import { BlogSection } from "../sections/BlogSection"

class IndexPage extends React.PureComponent {
  render() {
    return (
      <Layout>
        <BlogSection />
        <AboutSection />
      </Layout>
    )
  }
}

export default IndexPage
