import * as React from "react"

import { Accent } from "../../../components/Accent"
import { Heading } from "../../../components/Heading"
import { List } from "../../../components/List"
import { Text } from "../../../components/Text"

export const ExperienceSection: React.SFC = () => (
  <React.Fragment>
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
  </React.Fragment>
)
