import React from 'react'
import styled, { withTheme } from 'styled-components'

import Link from '../components/Link'
import Section from '../components/Section'

import Accent from '../components/Accent'

const Wrapper = styled(Section)`
  font-size: 20px;
`

const ColumnWrapper = styled.div`
  display: grid;
  font-size: 14px;
  margin-top: 48px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 40px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    row-gap: 0;
    font-size: 16px;
  }
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

const AboutSection = ({ theme, author }) => {
  return (
    <Wrapper title="About" id="about" color={theme.secondary}>
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
                  <Accent color={theme.secondary}>{exp.company}</Accent>
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
                <Link to={link.to} color={theme.secondary}>
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

export default withTheme(AboutSection)
