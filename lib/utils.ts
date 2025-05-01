import fs from "node:fs"
import path from "node:path"
import type { Frontmatter, Blog } from "@/lib/types"

// Blogs directory containing our markdown files
const CONTENT_DIR = path.resolve("content")

// Cached blogs
let cachedBlogs: Promise<Blog[]> | null = null

// Get all blogs with frontmatter and slug
export async function getBlogs(): Promise<Blog[]> {
  if (cachedBlogs) {
    return cachedBlogs
  }

  cachedBlogs = (async () => {
    const files = await fs.promises.readdir(CONTENT_DIR)

    if (!files.length) throw new Error("No blogs found")

    const blogs = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = path.parse(file).name
          return {
            slug,
            frontmatter: (await getFrontmatter(slug)).frontmatter
          }
        })
    )

    if (blogs.some((blog) => !blog.frontmatter)) {
      throw new Error("Missing frontmatter")
    }

    await new Promise((resolve) => setTimeout(resolve, 3000))
    return blogs
  })()

  return cachedBlogs
}

// Get frontmatter for a single blog post
export async function getFrontmatter(
  slug: string
): Promise<{ frontmatter: Frontmatter }> {
  const { meta: frontmatter } = await import(`@/content/${slug}.mdx`)

  if (!frontmatter) {
    throw new Error(`Missing frontmatter in ${slug}.mdx`)
  }

  return {
    frontmatter: frontmatter
  }
}

// Get all slugs
export async function getSlugs(): Promise<{ slug: string }[]> {
  const files = await fs.promises.readdir(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: path.parse(file).name }))
}
