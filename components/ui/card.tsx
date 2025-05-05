import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import styles from "@/styles/modules/card.module.css"
import Image from "next/image"

interface CardProps extends Project {}

const Card = ({ title, description, thumbnail, url }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        <Image src={thumbnail} alt={title} fill />
        <h3>{title}</h3>
      </div>
      <div className={styles.content}>
        <p>{description}</p>
        <a title="View Project" href={url} target="_blank" rel="noreferrer">
          <Button title="View Project" size="small" />
        </a>
      </div>
    </div>
  )
}

export { Card }
