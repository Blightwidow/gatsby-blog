import * as React from "react"
import styled from "styled-components"

import { animated } from "../styles/animated"

export interface PageProps {
  children?: React.ReactChild | React.ReactChild[]
  className?: string
  id?: string
}

export const Page: React.SFC<PageProps> = ({ children, id, className }) => (
  <Wrapper id={id} className={className}>
    <Content role="main">{children}</Content>
    <Spine />
    <SpineHead />
    <SpineHeadRadiation />
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  padding-top: calc(65vh - 8rem);
  padding-bottom: 10vh;

  &:after {
    content: "";
    position: absolute;
    width: 1px;
    top: calc(50vh - 8rem);
    bottom: 50vh;
    left: 1rem;
    opacity: 0.3;
    background: ${props => props.theme.colors.primary}
      linear-gradient(180deg, ${props => props.theme.colors.background} 1rem, rgba(0, 0, 0, 0) 20vh);
  }

  @media (min-width: 600px) {
    padding-top: calc(50vh - 12rem);
  }

  @media (min-width: 1060px) {
    margin: 0 auto 0 25vw;
    max-width: 100rem;
  }
`

const Content = styled.main`
  position: relative;
  margin: 0 2rem 0 calc(2rem + 1px);

  @media (min-width: 600px) {
    margin: 0 4rem 0 calc(4rem + 1px);
  }
`

const Spine = styled.div`
  position: fixed;
  z-index: 10;
  width: 1px;
  top: 50vh;
  bottom: 0;
  left: 1rem;
  background: ${props => props.theme.colors.primary}
    linear-gradient(0deg, ${props => props.theme.colors.background} 1rem, rgba(0, 0, 0, 0) 20vh);

  @media (min-width: 1060px) {
    left: calc(25vw + 1rem);
  }
`

const SpineHead = styled(Spine)`
  width: 9px;
  height: 9px;
  top: calc(50vh - 8px);
  left: calc(1rem - 4px);
  border-radius: 100%;
  background: ${props => props.theme.colors.primary};

  @media (min-width: 1060px) {
    left: calc(25vw + 1rem - 4px);
  }
`

const SpineHeadRadiation = animated(SpineHead, "radiate")
