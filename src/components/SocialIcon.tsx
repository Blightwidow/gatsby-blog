import * as React from "react"

import GithubLogo from "../medias/github.inline.svg"
import LinkedingLogo from "../medias/linkedin.inline.svg"

interface SocialIconProps {
  icon: "github" | "linkedin"
  className?: string
}

export class SocialIcon extends React.PureComponent<SocialIconProps> {
  render(): React.ReactNode {
    const { icon, className } = this.props

    switch (icon) {
      case "github":
        return <GithubLogo className={className} alt="github"/>
      case "linkedin":
        return <LinkedingLogo className={className} alt="linkedin"/>
    }
  }
}
