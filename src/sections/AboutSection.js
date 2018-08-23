import React from 'react'
import styled from 'styled-components'

import Link from '../components/Link'
import Section from '../components/Section'

import Accent from '../components/Accent'

const Wrapper = styled(Section)`
  font-size: 20px;
`

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 16px;
  margin-top: 48px;
`
const AboutTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`

const List = styled.ul`
  line-height: 26px;
`

const ListItem = styled.li`
  margin-top: ${props => (props.spaced ? '16px' : 0)};
`

const AboutSection = ({ color, author }) => {
  return (
    <Wrapper title="About" id="about" color={color}>
      <p>{author.introduction}</p>
      <ColumnWrapper>
        <div>
          <AboutTitle>Technical interests</AboutTitle>
          <List>
            {author.skills.map((skill, i) => (
              <ListItem key={i}>{skill}</ListItem>
            ))}
          </List>
        </div>
        <div>
          <AboutTitle>Experience</AboutTitle>
          <List>
            {author.experiences.map((exp, i) => (
              <ListItem key={i} spaced={i !== 0}>
                <p>{exp.period}</p>
                <p>
                  <Accent color={color}>{exp.company}</Accent>
                </p>
                <p>{exp.title}</p>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <AboutTitle id="contact">Links</AboutTitle>
          {author.socialLinks.map((link, i) => (
            <List key={i}>
              <ListItem>
                <Link to={link.to} color={color}>
                  {link.label}
                </Link>
              </ListItem>
            </List>
          ))}
        </div>
      </ColumnWrapper>
    </Wrapper>
  )
}

export default AboutSection
