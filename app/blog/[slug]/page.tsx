import fs from "node:fs"
import path from "node:path"

export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}


export function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content")
  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }))
}

export const dynamicParams = false