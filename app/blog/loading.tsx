import styles from "@/styles/modules/loading.module.css"

export default function Loading() {
  return (
    <section>
      <div className={styles["loading-container"]}>
        <div className={styles["loading-animation"]}>
          <div className={styles["loading-circle"]} />
        </div>
        {/* <div className={styles["loading-text"]}>Loading blogs...</div>
        <div className={styles["loading-dots"]}>
          <div className={styles["loading-dot"]} />
          <div className={styles["loading-dot"]} />
          <div className={styles["loading-dot"]} />
        </div> */}
      </div>
    </section>
  )
}
