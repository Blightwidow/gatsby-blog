export interface MediumPost {
  title: string
  uniqueSlug: string
  firstPublishedAt: string
  author: { username: string }
  virtuals: MediumVirtuals
}

export interface MediumVirtuals {
  tags: { name: string }[]
}
