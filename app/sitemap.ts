import { getBlogs } from "@/lib/utils"

export default async function sitemap() {
  const blogs = await getBlogs()

  blogs.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`,
    lastModified: post.frontmatter.date
  }))

  const routes = ["", "/blog"].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }))

  return [...routes, ...blogs]
}
