import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

export interface HeadProps {
  title?: string
  location: string
  children?: React.ReactChild
}

export const Head: React.FunctionComponent<HeadProps> = ({ title, location, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet title={`${title ? `${title} | ` : ""}${site.siteMetadata.title}`}>
      <html lang="en" />
      <script type="application/ld+json" data-test="jsonld">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Person",
          email: "theo@dammaretz.fr",
          name: "Theo Dammaretz",
          sameAs: [
            "https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;theodammaretz&#x2F;",
            "https:&#x2F;&#x2F;github.com&#x2F;Blightwidow",
            "https:&#x2F;&#x2F;stackoverflow.com&#x2F;users&#x2F;story&#x2F;8725059",
          ],
        })}
      </script>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Theo Dammaretz online business card and resume homemade website and portfolio" />
      <meta name="keywords" content="resume, CV, Theo, Dammaretz, software, engineer, international, developper, developer" />
      <meta name="author" content="Theo Dammaretz" />
      <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#282A36" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="Theo Dammaretz, Full Stack Engineer" />
      <meta property="og:type" content="profile" />
      <meta property="og:profile:first_name" content="Dammaretz" />
      <meta property="og:profile:last_name" content="Theo" />
      <meta property="og:url" content="https://dammaretz.fr" />
      <meta property="og:description" content="Theo Dammaretz online business card and resume" />
      <meta property="og:site_name" content="Theo Dammaretz, Full Stack Engineer" />
      <meta name="robots" content="index, follow" />
      <meta name="humans" content="/humans.txt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" type="image/xicon" href="/favicon.ico" />
      <link rel="canonical" href={location} />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      {children}
    </Helmet>
  )
}
