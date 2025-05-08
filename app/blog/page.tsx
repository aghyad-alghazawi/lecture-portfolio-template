import { getBlogs } from "@/lib/utils"
import styles from "@/styles/modules/loading.module.css"
import { Suspense } from "react"
import { BlogList } from "./_components/blog-list"
import { BlogSort } from "./_components/blog-sort"

export default async function Blog({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { sort } = await searchParams

  const sortOrder = sort === "desc" ? "desc" : "asc" // default to 'asc'
  const blogs = getBlogs()

  const Fallback = () => {
    return (
      <div className={styles["loading-dots"]}>
        <div className={styles["loading-dot"]} />
        <div className={styles["loading-dot"]} />
        <div className={styles["loading-dot"]} />
      </div>
    )
  }

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
          width: "100%",
          maxWidth: "50vw"
        }}
      >
        <h1>Blogs</h1>
        <BlogSort />
      </div>
      <Suspense fallback={<Fallback />}>
        <BlogList blogs={blogs} sortOrder={sortOrder} />
      </Suspense>
    </section>
  )
}
