import React from "react"
import StyleBase from "./src/components/StyleBase"

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      {element}
      <StyleBase />
    </React.Fragment>
  )
}