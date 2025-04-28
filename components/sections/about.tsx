import Image from "next/image"
import styles from "@/styles/modules/about.module.css"
import { Info } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Accordion } from "@/components/ui/accordion"

const About = () => (
  <section id="about">
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.experience}>
          {Info.experience?.map((item, index) => (
            <Accordion key={item.title} title={item.title} open={index === 0}>
              {item.details}
            </Accordion>
          ))}
        </div>
        <div className={styles.action}>
          <a title="Contact Me" href={`mailto:${Info.email}`}>
            <Button title="Contact Me" variant="primary" size="medium" />
          </a>
        </div>
      </div>
      <div className={styles.right}>
        <figure className={styles.avatar}>
          <div className={styles.image}>
            <Image src={Info.image} alt={Info.name} fill priority />
          </div>
          <figcaption className={styles.bio}>{Info.bio}</figcaption>
        </figure>
      </div>
    </div>
  </section>
)

export { About }
