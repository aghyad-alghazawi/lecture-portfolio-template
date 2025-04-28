import styles from "@/styles/modules/input.module.css"
import type { ComponentProps } from "react"

interface InputProps extends Omit<ComponentProps<"input">, "size"> {
  variant?: "primary" | "success" | "error"
  uiSize?: "small" | "medium" | "large"
}

const Input = ({ variant, uiSize = "medium", ...props }: InputProps) => {
  const inputClassName = `${styles.input} ${variant ? styles[variant] : ""} ${styles[uiSize]}`
  return <input className={inputClassName} {...props} />
}

export { Input }
