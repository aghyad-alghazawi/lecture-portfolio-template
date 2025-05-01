import styles from "@/styles/modules/loading.module.css"

export default function Loading() {
  return (
    <main>
      <section>
        <div className={styles["loading-container"]}>
          <div className={styles["loading-animation"]}>
            <div className={styles["loading-circle"]} />
          </div>
        </div>
      </section>
    </main>
  )
}
