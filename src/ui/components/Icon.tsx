import * as React from "react"

import GithubLogo from "../medias/github.inline.svg"
import LinkedingLogo from "../medias/linkedin.inline.svg"

interface IconProps {
  icon: "github" | "linkedin"
  className?: string
}

export const Icon: React.SFC<IconProps> = ({ icon, className }) => {
  switch (icon) {
    case "github":
      return <GithubLogo className={className} alt="github" />
    case "linkedin":
      return <LinkedingLogo className={className} alt="linkedin" />
  }
}
