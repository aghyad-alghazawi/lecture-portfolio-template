"use client"

import styles from "@/styles/modules/transition.module.css"
import { AnimatePresence, motion } from "motion/react"
import { usePathname } from "next/navigation"

const pageTransition = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          style={{ position: "relative", width: "100%", height: "100%" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
