import { getBlogs } from "@/lib/utils"

export const baseUrl = "https://portfolio-blog-starter.vercel.app"

export default async function sitemap() {
  const blogs = await getBlogs()

  blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date
  }))

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }))

  return [...routes, ...blogs]
}
