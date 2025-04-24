import styles from "@/styles/modules/projects.module.css";
import { PROJECTS } from "@/lib/data";
import { Card } from "@/components/ui/card";

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className={styles["projects-grid"]}>
      {PROJECTS.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  </section>
);

export { Projects };
