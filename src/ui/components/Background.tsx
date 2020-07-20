import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import * as React from "react"
import styled from "styled-components"

export const Background: React.FunctionComponent = () => {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1060, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Bg>
      <Gradient />
      <StyledImg fluid={{ ...avatar.childImageSharp.fluid }} alt="" />
    </Bg>
  )
}

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`

const Gradient = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% center;
  background-image: linear-gradient(
      270deg,
      ${(props) => props.theme.colors.background},
      rgba(${(props) => props.theme.colors.backgroundRgb}, 0) 80%
    ),
    linear-gradient(0deg, ${(props) => props.theme.colors.background}, rgba(${(props) => props.theme.colors.backgroundRgb}, 0) 60%);
`

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 80vh;

  @media (min-width: 1060px) {
    width: 40%;
    height: 100%;
  }
`
