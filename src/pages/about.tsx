import * as React from "react"
import styled from "styled-components"

import { Accent } from "../components/Accent"
import { Background } from "../components/Background"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Heading } from "../components/Heading"
import { Link } from "../components/Link"
import { List } from "../components/List"
import { Page } from "../components/Page"
import { SocialIcon } from "../components/SocialIcon"
import { Text } from "../components/Text"
import { animated } from "../utils/animation"

import avatar from "../../data/avatar.jpg"

class IndexPage extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <Head />
        <Background image={avatar} />
        <Header title=".about()" />
        <ContentWrapper>
          <PageHeading variant="primary">about()</PageHeading>
          <BodyWrapper>
            <Link to="https://www.linkedin.com/in/theodammaretz/">
              <Icon icon="linkedin" />
            </Link>
            <Link to="https://github.com/Blightwidow">
              <Icon icon="github" />
            </Link>
            <Text as="h2">
              <Accent>I am a profesionnal Software and Frontend Engineer. Loves the Web and its capabilities.</Accent>
            </Text>
            <Text>// +4 years of experience</Text>
            <Heading variant="secondary" as="h3">
              Skills
            </Heading>
            <List>
              <Text>
                Frontend development,
                <br /> Software engineering
              </Text>
              <Text>
                React, Node, Jest, <br />
                Cypress
              </Text>
              <Text>
                Progressive Web Apps, <br />
                Service Workers
              </Text>
              <Text>
                Conference, Articles, <br />
                Community animation
              </Text>
            </List>
            <Heading variant="secondary" as="h3">
              Experience
            </Heading>
            <List>
              <React.Fragment>
                <Text collapse={true}>
                  <Accent>Frontend engineer</Accent>
                </Text>
                <Text collapse={true}>at TheFork</Text>
                <Text collapse={true}>2018 - Now</Text>
              </React.Fragment>
              <React.Fragment>
                <Text collapse={true}>
                  <Accent>Fullstack engineer</Accent>
                </Text>
                <Text collapse={true}>at Boston Consulting</Text>
                <Text collapse={true}>2017 - 2018</Text>
              </React.Fragment>
              <React.Fragment>
                <Text collapse={true}>
                  <Accent>Fullstack engineer</Accent>
                </Text>
                <Text collapse={true}>at Le Courrier de Russie</Text>
                <Text collapse={true}>2016 - 2017</Text>
              </React.Fragment>
              <React.Fragment>
                <Text collapse={true}>
                  <Accent>Research engineer</Accent>
                </Text>
                <Text collapse={true}>at Tohoku University</Text>
                <Text collapse={true}>2015 - 2016</Text>
              </React.Fragment>
            </List>
            <Heading variant="secondary" as="h3">
              Languages
            </Heading>
            <List>
              <React.Fragment>
                <Text variant="secondary" collapse={true}>
                  {"// fluent"}
                </Text>
                <Text collapse={true}>
                  <Accent>fr-FR</Accent> French
                </Text>
                <Text collapse={true}>
                  <Accent>en-US</Accent> English
                </Text>
              </React.Fragment>
              <React.Fragment>
                <Text variant="secondary" collapse={true}>
                  {"// notions"}
                </Text>
                <Text collapse={true}>
                  <Accent>ru-RU</Accent> Russian
                </Text>
                <Text collapse={true}>
                  <Accent>jp-JP</Accent> Japanese
                </Text>
              </React.Fragment>
            </List>
            <Heading variant="secondary" as="h3">
              Hobbies
            </Heading>
            <Text>Video games</Text>
            <Text>Mountain hiking</Text>
            <Text>Keyboards</Text>
            <Text>Skiing</Text>
          </BodyWrapper>
        </ContentWrapper>
      </React.Fragment>
    )
  }
}

export default IndexPage

const ContentWrapper = styled(Page)`
  grid-area: content;
`

const PageHeading = animated(Heading, "slide-in-top")

const BodyWrapper = animated("div", "slide-in-right")

const Icon = styled(SocialIcon)`
  fill: ${props => props.theme.colors.primary};
  width: ${props => props.theme.spaces.l};
  height: ${props => props.theme.spaces.l};
  margin: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.xs} ${props => props.theme.spaces.l} 0;
  transition: 0.3s opacity ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 600px) {
    margin-bottom: ${props => props.theme.spaces.xl};
  }
`