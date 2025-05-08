import styles from "@/styles/modules/accordion.module.css"
import type { ReactNode } from "react"

interface AccordionProps {
  title: string
  children: ReactNode
  open?: boolean
}

const Accordion = ({ title, children, open = false }: AccordionProps) => {
  return (
    <details className={styles.accordion} open={open}>
      <summary className={styles.summary}>{title}</summary>
      <span className={styles.content}>{children}</span>
    </details>
  )
}

export { Accordion }
