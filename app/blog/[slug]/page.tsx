import type { Frontmatter } from "@/lib/types"
import type { Metadata } from "next"

import { Breadcrumb } from "@/components/ui/breadcrumb"
import { getFrontmatter, getSlugs } from "@/lib/utils"

import styles from "@/styles/modules/blog.module.css"

export async function generateMetadata({
  params
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter } = await getFrontmatter(slug)

  const { title, date, summary, author, image }: Frontmatter = frontmatter
  const ogImage = image
    ? image
    : `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${encodeURIComponent(title ?? "Blog")}`

  const metadata: Metadata = {
    title: `${title} | Blog by ${author}`,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: date,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ""
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage]
    }
  }

  return metadata
}

export default async function Slug({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const { slug } = await params
  const { default: Post, meta: Frontmatter } = await import(
    `@/content/${slug}.mdx`
  )

  if (!Frontmatter) {
    throw new Error("Missing frontmatter")
  }

  return (
    <article className={styles.blog}>
      {/* Schema.org JSON-LD for Google Search engine */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: Frontmatter.title,
            datePublished: Frontmatter.date,
            dateModified: Frontmatter.date,
            description: Frontmatter.summary,
            image: Frontmatter.image
              ? `${process.env.NEXT_PUBLIC_BASE_URL}${Frontmatter.image}`
              : `${process.env.NEXT_PUBLIC_BASE_URL}/api/og?title=${encodeURIComponent(Frontmatter.title)}`,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: Frontmatter.author
            }
          })
        }}
      />
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
