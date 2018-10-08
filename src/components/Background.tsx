import * as React from "react"
import Particles from "react-particles-js"

export class Background extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <Particles
        params={{
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: {
                enable: false,
              },
              onhover: {
                enable: false,
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ef476f",
            },
            line_linked: {
              enable: false,
            },
            move: {
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: false,
              },
              value: 4,
            },
            opacity: {
              anim: {
                enable: false,
                opacity_min: 0.1,
                speed: 1,
                sync: false,
              },
              random: false,
              value: 0.02,
            },
            shape: {
              image: {
                height: 1000,
                src: "img/github.svg",
                width: 1000,
              },
              polygon: {
                nb_sides: 4,
              },
              stroke: {
                color: "#ef476f",
                width: 0,
              },
              type: "circle",
            },
            size: {
              anim: {
                enable: false,
                size_min: 0.1,
                speed: 40,
                sync: false,
              },
              random: true,
              value: 435,
            },
          },
        }}
        style={{
          left: "0",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "-1",
        }}
      />
    )
  }
}
