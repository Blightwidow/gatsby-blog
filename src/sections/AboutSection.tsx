import * as React from "react"
import styled from "../utils/styled-components"

import { Link } from "../components/Link"
import { Section } from "../components/Section"

import { Accent } from "../components/Accent"
import { Author } from "../types/siteMeta"

export interface AboutSectionProps {
  author: Author
}

export class AboutSection extends React.PureComponent<AboutSectionProps> {
  render(): React.ReactNode {
    const { author } = this.props

    return (
      <Wrapper title="About" id="about" primary={false} secondary={true}>
        <p>{author.introduction}</p>
        <ColumnWrapper>
          <div>
            <AboutTitle>Technical interests</AboutTitle>
            <List>
              {author.skills.map((skill, i) => (
                <ListItem spaced={false} key={i}>
                  {skill}
                </ListItem>
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
                    <Accent primary={false} secondary={true}>
                      {exp.company}
                    </Accent>
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
                <ListItem spaced={false}>
                  <Link to={link.to} primary={false} secondary={true}>
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
}

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

const ListItem = styled<{ spaced: boolean }, "li">("li")`
  margin-top: ${props => (props.spaced ? "16px" : 0)};
`
