export interface StaticQueryResult {
  site: { siteMetadata: SiteMeta }
}

export interface SiteMeta {
  title: string
  author: Author
}

export interface Author {
  fullName: string
  email: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  to: string
  label: string
}
