import styles from "@/styles/modules/transition.module.css"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.transition}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.overlay}>{children}</div>
    </>
  )
}
