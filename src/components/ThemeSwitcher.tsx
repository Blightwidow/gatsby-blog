import * as React from "react"
import styled from "../utils/styled-components"

import { Switch } from "./Switch"

export interface ThemeSwitcherProps {
  handleSwitch: () => void
}

export class ThemeSwitcher extends React.PureComponent<ThemeSwitcherProps> {
  render(): React.ReactNode {
    return (
      <Wrapper>
        <InnerWrapper>
          <ThemeIcon>{"\u2600"}</ThemeIcon>
          <ThemSwitch handleSwitch={this.props.handleSwitch} />
          <ThemeIcon>{"\u263E"}</ThemeIcon>
        </InnerWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 30px;
  left: 30px;
  background: ${p => p.theme.background};
  height: 3rem;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  box-shadow: 1px 1px 5px 5px ${p => p.theme.primaryText};
`

const InnerWrapper = styled.div`
  display: flex;
`

const ThemSwitch = styled(Switch)`
  margin: auto;
`

const ThemeIcon = styled.span`
  margin: 0 0.8rem;
`
