import { About, Contact, Hero, Projects } from "@/components/sections"
import styles from "@/styles/modules/page.module.css"

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
