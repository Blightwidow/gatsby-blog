import * as React from "react"
import styled from "styled-components"

import { Accent } from "@components/Accent"
import { Background } from "@components/Background"
import { Head } from "@components/Head"
import { Header } from "@components/Header"
import { Heading } from "@components/Heading"
import { Page } from "@components/Page"
import { Text } from "@components/Text"
import { animated } from "@styles/animated"

import { ExperienceSection } from "@routes/about/components/ExperienceSection"
import { LanguageSection } from "@routes/about/components/LanguageSection"
import { SkillsSection } from "@routes/about/components/SkillsSection"
import { SocialLinks } from "@routes/about/components/SocialLinks"
import avatar from "@routes/about/medias/avatar.jpg"

import { PageProps } from "@data/models/PageProps"

import { useLite } from "../utils/useLite"

const IndexPage: React.FunctionComponent<PageProps> = ({ location }) => {
  const hasBg = !useLite()

  return (
    <React.Fragment>
      <Head location={location.href} title="about" />
      {hasBg && <Background image={avatar} />}
      <Header title=".about()" />
      <ContentWrapper>
        <PageHeading variant="primary">about()</PageHeading>
        <SocialLinks />
        <Text as="h2">
          <Accent>I am a profesionnal Software and Frontend Engineer. Loves the Web and its capabilities.</Accent>
        </Text>
        <Text>// +4 years of experience</Text>
        <SkillsSection />
        <ExperienceSection />
        <LanguageSection />
        <Heading variant="secondary" as="h3">
          Hobbies
        </Heading>
        <Text>Video games</Text>
        <Text>Mountain hiking</Text>
        <Text>Keyboards</Text>
        <Text>Skiing</Text>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default IndexPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")
