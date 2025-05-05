import styles from "@/styles/modules/loading.module.css"

export default function Loading() {
  return (
    <main>
      <section>
        <div className={styles["loading-dots"]}>
          <div className={styles["loading-dot"]} />
          <div className={styles["loading-dot"]} />
          <div className={styles["loading-dot"]} />
        </div>
      </section>
    </main>
  )
}
