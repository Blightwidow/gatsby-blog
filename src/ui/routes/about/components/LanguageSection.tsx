import * as React from "react"

import { Accent } from "../../../components/Accent"
import { Heading } from "../../../components/Heading"
import { List } from "../../../components/List"
import { Text } from "../../../components/Text"

export const LanguageSection: React.SFC = () => (
  <React.Fragment>
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
          <Accent>ja-JP</Accent> Japanese
        </Text>
      </React.Fragment>
    </List>
  </React.Fragment>
)
