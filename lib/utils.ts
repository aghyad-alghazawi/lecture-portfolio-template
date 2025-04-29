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
export async function getPosts(sortOrder: "asc" | "desc" = "desc"): Promise<
  {
    frontmatter: Frontmatter
    slug: string
  }[]
> {
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

  const sorted = blogs.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || "").getTime()
    const dateB = new Date(b.frontmatter.date || "").getTime()
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA
  })

  return sorted
}

// Get all slugs
export async function getSlugs(): Promise<{ slug: string }[]> {
  const files = await fs.promises.readdir(CONTENT_DIR)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: path.parse(file).name }))
}
