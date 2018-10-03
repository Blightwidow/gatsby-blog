import React from 'react'
import styled from 'styled-components'

import Head from '../components/Head'

const Wrapper = styled.div`
  padding: 50px 20px;
`

const Smiley = styled.p`
  margin: 20px 10px 150px 30px;
  font-size: 100px;
`

const NotFoundPage = () => (
  <Wrapper>
    <Head siteMetadata={{ title: 'Page not found' }}>
      <meta name="robots" content="noindex, nofolllow" />
    </Head>
    <h1>The page not accessible</h1>
    <p>The page you requested doesn't exists, or your connectivity doesn't allow you to view it.</p>
    <Smiley>:(</Smiley>
  </Wrapper>
)

export default NotFoundPage
