import styles from "@/styles/modules/blog.module.css"
import { getFrontmatter, getSlugs } from "@/lib/utils"
import { Breadcrumb } from "@/components/ui/breadcrumb"

import type { Metadata } from "next"

export async function generateMetadata({
  params
}: { params: Promise<{ slug: string } > }) {
  const { slug } = await params
  const { frontmatter } = await getFrontmatter(slug)
  const metadata: Metadata = {
    title: `Blog | ${frontmatter.title}`,
    description: frontmatter.summary,
    openGraph: {
      siteName: `Blog | ${frontmatter.title}`
    }
  }

  // if (frontmatter.og_image)
  //   metadata.openGraph!.images = [
  //     {
  //       url: frontmatter.og_image,
  //       width: 1200,
  //       height: 630,
  //       alt: ""
  //     }
  //   ]

  return metadata
}

export default async function Post({
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
