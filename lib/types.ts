export type Project = {
  title: string
  description: string
  thumbnail: string
  url: string
}

export type Link = {
  label: string
  href: string
  icon?: string
}

export type Frontmatter = {
  title?: string
  date?: string
  author?: string
  summary?: string
  image?: string
}