export interface SiteMeta {
  title: string
  author: Author
}

export interface Author {
  fullName: string
  email: string
  introduction: string
  skills: string[]
  experiences: Experience[]
  socialLinks: SocialLink[]
}

export interface Experience {
  period: string
  company: string
  title: string
}

export interface SocialLink {
  to: string
  label: string
}
