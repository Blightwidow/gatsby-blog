import * as React from "react"

import { Heading } from "../../../components/Heading"
import { List } from "../../../components/List"
import { Text } from "../../../components/Text"

export const SkillsSection: React.SFC = () => (
  <React.Fragment>
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
  </React.Fragment>
)
