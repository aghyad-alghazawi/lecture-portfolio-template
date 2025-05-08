import { Card } from "@/components/ui/card"
import { Projects as ProjectsData } from "@/lib/data"
import styles from "@/styles/modules/projects.module.css"
import { v4 as uuidv4 } from "uuid"

const Projects = () => (
  <section id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles["projects-grid"]}>
      {ProjectsData.map((project, index) => (
        <Card key={uuidv4()} {...project} />
      ))}
    </div>
  </section>
)

export { Projects }
