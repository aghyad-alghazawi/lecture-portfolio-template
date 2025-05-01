import { getBlogs } from "@/lib/utils"

export async function GET() {
  const allBlogs = await getBlogs()

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (
        new Date(a.frontmatter.date || "") > new Date(b.frontmatter.date || "")
      ) {
        return -1
      }
      return 1
    })
    .map(
      (post) =>
        `<item>
          <title>${post.frontmatter.title}</title>
          <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}</link>
          <description>${post.frontmatter.summary || ""}</description>
          <pubDate>${new Date(
            post.frontmatter.date || ""
          ).toUTCString()}</pubDate>
        </item>`
    )
    .join("\r\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${process.env.NEXT_PUBLIC_BASE_URL}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml"
    }
  })
}
