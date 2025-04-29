import fs from "node:fs"
import path from "node:path"

const CONTENT_DIR = path.join(process.cwd(), "content")

// Get frontmatter and slug for a single blog post
export async function getFrontmatter(slug: string) {
  const fileName = `${slug}.mdx`
  const filePath = path.join(CONTENT_DIR, fileName)
  // Dynamic import to get frontmatter
  const mod = await import(`../content/${slug}.mdx`)
  return {
    frontmatter: mod.meta,
    slug,
  }
}

// Get all blogs with frontmatter and slug
export async function getBlogs() {
  const files = fs.readdirSync(CONTENT_DIR)
  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = path.parse(file).name
        return await getFrontmatter(slug)
      })
  )
  return blogs
}

// Get all slugs
export async function getSlugs() {
  const files = fs.readdirSync(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: path.parse(file).name }))
}

// Get the full blog post component and frontmatter
export async function getBlogBySlug(slug: string) {
  const mod = await import(`../content/${slug}.mdx`)
  return {
    frontmatter: mod.meta,
    Content: mod.default,
    slug,
  }
}
