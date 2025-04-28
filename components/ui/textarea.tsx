import styles from "@/styles/modules/textarea.module.css"
import type { ComponentProps } from "react"

interface TextAreaProps extends ComponentProps<"textarea"> {
  variant?: "primary" | "success" | "error"
  size?: "small" | "medium" | "large"
}

const TextArea = ({ variant, size = "medium", ...props }: TextAreaProps) => {
  const textAreaClassName = `${styles.textarea} ${variant ? styles[variant] : ""} ${styles[size]}`
  return <textarea className={textAreaClassName} {...props} />
}

export { TextArea }
