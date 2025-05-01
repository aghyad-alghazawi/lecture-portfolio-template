import fs from "node:fs"
import path from "node:path"
import type { Frontmatter } from "@/lib/types"

const CONTENT_DIR = path.resolve("content")

// Get frontmatter and slug for a single blog post
export async function getFrontmatter(
  slug: string
): Promise<{ frontmatter: Frontmatter; slug: string }> {
  const mod = await import(`@/content/${slug}.mdx`)
  if (!mod.meta) {
    throw new Error(`Missing frontmatter in ${slug}.mdx`)
  }

  return {
    frontmatter: mod.meta,
    slug
  }
}

// Get all blogs with frontmatter and slug
let cachedBlogs: Promise<
  {
    frontmatter: Frontmatter
    slug: string
  }[]
> | null = null

export async function getBlogs(): Promise<
  {
    frontmatter: Frontmatter
    slug: string
  }[]
> {
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
          return await getFrontmatter(slug)
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

// Get all slugs
export async function getSlugs(): Promise<{ slug: string }[]> {
  const files = await fs.promises.readdir(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: path.parse(file).name }))
}
