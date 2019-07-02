import styled, { css, FlattenSimpleInterpolation, keyframes } from "styled-components"

const radiate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(8);
    opacity: 0;
  }
`
const slideInRight = keyframes`
  0% {
    transform: translateX(5rem);
    opacity: 0;
  }
  20% {
    transform: translateX(4rem);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideInTop = keyframes`
  0% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
  20% {
    transform: rotateX(54deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
`

type Animation = "radiate" | "slide-in-right" | "slide-in-top"

function getAnimation(animation: Animation): FlattenSimpleInterpolation {
  switch (animation) {
    case "radiate":
      return css`
        animation: ${radiate} 1s cubic-bezier(0.215, 0.61, 0.355, 1) both;
      `
    case "slide-in-right":
      return css`
        animation: ${slideInRight} 1s cubic-bezier(0.215, 0.61, 0.355, 1) 0.3s both;
      `
    case "slide-in-top":
      return css`
        animation: ${slideInTop} 1s cubic-bezier(0.19, 1, 0.22, 1) both;
      `
  }
}

export const animated = (component: any, animation: Animation) => styled(component)`
  ${getAnimation(animation)}
`
