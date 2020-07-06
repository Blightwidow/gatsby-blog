import * as React from "react"
import styled from "styled-components"

import { Icon } from "@components/Icon"
import { Link } from "@components/Link"

export const SocialLinks: React.FunctionComponent = () => (
  <React.Fragment>
    <SocialLink to="https://www.linkedin.com/in/theodammaretz/" aria-label="View my linkedin profile">
      <SocialIcon icon="linkedin" />
    </SocialLink>
    <SocialLink to="https://github.com/Blightwidow" aria-label="View my github profile">
      <SocialIcon icon="github" />
    </SocialLink>
  </React.Fragment>
)

const SocialLink = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.colors.primary};

  @media (min-width: 600px) {
    margin-bottom: ${props => props.theme.spaces.xl};
  }
`

const SocialIcon = styled(Icon)`
  fill: ${props => props.theme.colors.primary};
  width: ${props => props.theme.spaces.xl};
  height: ${props => props.theme.spaces.xl};
  margin: ${props => props.theme.spaces.xs} ${props => props.theme.spaces.l} ${props => props.theme.spaces.l} 0;
  transition: 0.3s opacity ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`
