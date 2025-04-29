import styles from "@/styles/modules/blog.module.css"
import { getSlugs } from "@/lib/utils"

export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post, meta: Frontmatter } = await import(
    `@/content/${slug}.mdx`
  )

  return (
    <article className={styles.blog}>
      <div data-slot="blog-meta">
        <h1 data-slot="blog-title">{Frontmatter.title}</h1>
        <div data-slot="blog-details">
          <time data-slot="blog-date">{Frontmatter.date}</time>
          <span data-slot="blog-author">{Frontmatter.author}</span>
        </div>
        <p data-slot="blog-summary">{Frontmatter.summary}</p>
      </div>
      <Post />
    </article>
  )
}

export async function generateStaticParams() {
  return getSlugs()
}

export const dynamicParams = false
