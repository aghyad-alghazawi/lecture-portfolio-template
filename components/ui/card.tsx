import { Button } from "@/components/ui/button"
import type { CardProps } from "@/lib/types"
import styles from "@/styles/modules/card.module.css"
import Image from "next/image"

const Card = ({ title, description, thumbnail, url }: CardProps) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.thumbnail}>
        <Image src={thumbnail} alt={title} fill />
      </div>
      <p>{description}</p>
      <a title="View Project" href={url} target="_blank" rel="noreferrer">
        <Button title="View Project" variant="primary" size="small" />
      </a>
    </div>
  )
}

export { Card }
