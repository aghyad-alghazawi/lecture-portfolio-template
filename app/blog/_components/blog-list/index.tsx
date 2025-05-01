"use client"

import Link from "next/link"
import type { Blog } from "@/lib/types"
import styles from "@/styles/modules/blog.module.css"
import { use } from "react"

interface BlogListProps {
  blogs: Promise<Blog[]>
  sortOrder: "asc" | "desc"
}

const BlogList = ({ blogs, sortOrder }: BlogListProps) => {
  const resolvedBlogs = use(blogs)
  
  function sortBlogs(blogs: Blog[], sortOrder: "asc" | "desc"): Blog[] {
    return blogs.sort((a, b) => {
      if (
        new Date(a.frontmatter.date || "") > new Date(b.frontmatter.date || "")
      ) {
        return sortOrder === "asc" ? -1 : 1
      }
      return sortOrder === "asc" ? 1 : -1
    })
  }

  return (
    <ul className={styles["blog-list"]}>
      {sortBlogs(resolvedBlogs, sortOrder).map((blog) => (
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
  )
}

export { BlogList }
