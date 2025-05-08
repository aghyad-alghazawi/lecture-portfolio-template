import { getBlogs } from "@/lib/utils"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getBlogs()

  const blogRoutes = blogs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: post.frontmatter.date
  }))

  const routes = ["", "/blog"].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }))

  return [...routes, ...blogRoutes]
}
