import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ siteMetadata }) => (
  <Helmet
    siteMetadata={siteMetadata.title}
  >
    <html lang="en" />
    <script type="application/ld+json">{`
        {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Theo Dammaretz",
            "email": "theo@dammaretz.fr",
            "sameAs": [
                "https:&#x2F;&#x2F;www.linkedin.com&#x2F;in&#x2F;theodammaretz&#x2F;",
                "https:&#x2F;&#x2F;gitlab.com&#x2F;Blightwidow",
                "https:&#x2F;&#x2F;stackoverflow.com&#x2F;users&#x2F;story&#x2F;8725059"
            ]
        }
    `}</script>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="Theo Dammaretz online business card and resume homemade website and portfolio" />
    <meta name="keywords" content="resume, CV, Theo, Dammaretz, software, engineer, international, developper, developer" />
    <meta name="author" content="Theo Dammaretz" />
    <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#EF476F" />
    <meta name="twitter:card" content="summary" />
    <meta property="og:title" content="Theo Dammaretz, Full Stack Engineer"/>
    <meta property="og:type" content="profile"/>
    <meta property="og:profile:first_name" content="Dammaretz"/>
    <meta property="og:profile:last_name" content="Theo"/>
    <meta property="og:url" content="http:////dammaretz.fr"/>
    <meta property="og:description" content="Theo Dammaretz online business card and resume"/>
    <meta property="og:site_name" content="Theo Dammaretz, Full Stack Engineer"/>
    <meta name="robots" content="index, follow" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" type="image/xicon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
  </Helmet>
)

export default Head
