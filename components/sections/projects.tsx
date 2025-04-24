import { Card } from "@/components/ui/card"
import { PROJECTS } from "@/lib/data"
import styles from "@/styles/modules/projects.module.css"

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className={styles["projects-grid"]}>
      {PROJECTS.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </section>
)

export { Projects }
