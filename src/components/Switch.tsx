import * as React from "react"
import styled from "../utils/styled-components"

export interface SwitchProps {
  handleSwitch: () => void
  className?: string
}

export interface SwitchState {
  left: boolean
}

export class Switch extends React.PureComponent<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props)
    this.state = { left: true }
  }

  handleSwitch = () => {
    this.setState(prevState => ({ left: !prevState.left }))
    this.props.handleSwitch()
  }

  render(): React.ReactNode {
    return (
      <Wrapper onClick={this.handleSwitch} className={this.props.className}>
        <Circle left={this.state.left} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 0.8rem;
  width: 2.6rem;
  height: 1.6rem;
  background: ${p => p.theme.secondaryText};
`

const Circle = styled<{ left: boolean }, "div">("div")`
  margin: 0.2rem;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 100%;
  overflow: hidden;
  background: ${p => p.theme.background};
  transform: ${p => (p.left ? "translateX(0)" : "translateX(1rem)")};
`
