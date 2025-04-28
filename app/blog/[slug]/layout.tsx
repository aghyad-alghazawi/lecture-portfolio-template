import styles from "@/styles/modules/blog.module.css";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <article className={styles.blog}>{children}</article>
    </main>
  )
}
