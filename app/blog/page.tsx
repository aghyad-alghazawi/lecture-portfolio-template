import { getPosts, sortBlogsByDate } from "@/lib/utils"
import Link from "next/link"
import styles from "@/styles/modules/blog.module.css"
import { BlogSort } from "./_components/blog-sort"
import { Suspense } from "react"

export default async function Blog({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { sort } = await searchParams

  const sortOrder = sort === "desc" ? "desc" : "asc" // default to 'asc'
  const blogs = await getPosts()

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          width: "100%",
          maxWidth: "40vw"
        }}
      >
        <h1>Blogs</h1>
        <BlogSort />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className={styles["blog-list"]}>
          {sortBlogsByDate(blogs, sortOrder).map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug}>
              <li>
                <h2>{blog.frontmatter.title}</h2>
                <div>
                  <span>{blog.frontmatter.author}</span>
                  <time>{blog.frontmatter.date}</time>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Suspense>
    </section>
  )
}
