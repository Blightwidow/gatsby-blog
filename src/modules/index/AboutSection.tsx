import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import { FormattedMessage } from "react-intl"
import styled from "../../utils/styled-components"

import { Link } from "../../components/Link"
import { Section } from "../../components/Section"

import { Accent } from "../../components/Accent"
import { StaticQueryResult } from "../../types/StaticQuery"

export class AboutSection extends React.PureComponent {
  render(): React.ReactNode {
    return <StaticQuery query={query} render={this.renderChildren} />
  }

  private renderChildren = (data: StaticQueryResult): React.ReactNode => {
    const { author } = data.site.siteMetadata

    return (
      <Wrapper titleKey="about" id="about" primary={true}>
        <FormattedMessage id="about.intro" tagName="p" />
        <ColumnWrapper>
          <div>
            <FormattedMessage id="about.interests">{title => <AboutTitle>{title}</AboutTitle>}</FormattedMessage>
            <List>
              {author.skills.map((skillKey, i) => (
                <FormattedMessage id={`about.skills.${skillKey}`} key={i}>
                  {skill => (
                    <ListItem spaced={false}>
                      {skill}
                    </ListItem>
                  )}
                </FormattedMessage>
              ))}
            </List>
          </div>
          <div>
            <FormattedMessage id="about.experience">{title => <AboutTitle>{title}</AboutTitle>}</FormattedMessage>
            <List>
              {author.experiences.map((exp, i) => (
                <ListItem key={i} spaced={i !== 0}>
                  <p>{exp.period}</p>
                  <p>
                    <Accent primary={true}>{exp.company}</Accent>
                  </p>
                  <p>{exp.title}</p>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <FormattedMessage id="about.links">{title => <AboutTitle>{title}</AboutTitle>}</FormattedMessage>
            {author.socialLinks.map((link, i) => (
              <List key={i}>
                <ListItem spaced={false}>
                  <Link to={link.to} primary={true}>
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

const ListItem = styled.li<{ spaced: boolean }>`
  margin-top: ${props => (props.spaced ? "16px" : 0)};
`

const query = graphql`
  query indexAboutSectionQuery {
    site {
      siteMetadata {
        author {
          skills
          fullName
          email
          experiences {
            period
            company
            title
          }
          socialLinks {
            to
            label
          }
        }
      }
    }
  }
`
