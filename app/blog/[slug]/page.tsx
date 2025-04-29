import styles from "@/styles/modules/blog.module.css"
import { getSlugs } from "@/lib/utils"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post, meta: Frontmatter } = await import(
    `@/content/${slug}.mdx`
  )

  if (!Frontmatter) {
    throw new Error("Missing frontmatter")
  }

  return (
    <article className={styles.blog}>
      <Breadcrumb
        items={[{ label: "Blog", href: "/blog" }, { label: Frontmatter.title }]}
      />
      <div data-slot="blog-meta">
        <h1 data-slot="blog-title">{Frontmatter.title}</h1>
        <div data-slot="blog-details">
          <span data-slot="blog-author">{Frontmatter.author}</span>
          <time data-slot="blog-date">{Frontmatter.date}</time>
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
