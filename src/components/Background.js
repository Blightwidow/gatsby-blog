import React from 'react'
import Particles from 'react-particles-js'

const Background = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 4,
          density: {
            enable: false,
          },
        },
        color: {
          value: '#ef476f',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ef476f',
          },
          polygon: {
            nb_sides: 4,
          },
          image: {
            src: 'img/github.svg',
            width: 1000,
            height: 1000,
          },
        },
        opacity: {
          value: 0.02,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 435,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
          },
          onclick: {
            enable: false,
          },
          resize: true,
        },
      },
      retina_detect: true,
    }}
    style={{
      width: '100%',
      position: 'absolute',
      zIndex: '-1',
      left: '0',
      top: '0',
    }}
  />
)

export default Background
