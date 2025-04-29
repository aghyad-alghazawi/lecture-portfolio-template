import { getBlogs } from "@/lib/utils"
import Link from "next/link"
import styles from "@/styles/modules/blog.module.css"

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <section>
      <h1>Blogs</h1>
      <ul className={styles["blog-list"]}>
        {blogs.map((blog) => (
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
    </section>
  )
}
