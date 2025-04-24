import styles from "@/styles/modules/page.module.css";
import { Hero, About, Projects, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
