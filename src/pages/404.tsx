import * as React from "react"
import { FormattedMessage } from "react-intl"
import styled from "styled-components"
import { ThemeProvider } from "../utils/styled-components"

import { Head } from "../components/Head"
import { StyleBase } from "../components/StyleBase"

import { defaultTheme } from "../utils/theme"
class NotFoundPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>
          <StyleBase />
          <Head title="Page not found">
            <meta name="robots" content="noindex, nofolllow" />
          </Head>
          <FormattedMessage id="404.title" tagName="h1" />
          <FormattedMessage id="404.subtitle" tagName="p" />
          <Smiley>:(</Smiley>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default NotFoundPage

const Wrapper = styled.div`
  padding: 50px 20px;
`

const Smiley = styled.p`
  margin: 20px 10px 150px 30px;
  font-size: 100px;
`
