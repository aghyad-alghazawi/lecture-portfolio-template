import styles from "@/styles/modules/label.module.css"
import type { ComponentProps } from "react"

interface LabelProps extends Omit<ComponentProps<"label">, "size"> {
  size?: "small" | "medium" | "large"
}

const Label = ({ size = "medium", ...props }: LabelProps) => {
  const labelClassName = `${styles.label} ${styles[size]}`
  // biome-ignore lint/a11y/noLabelWithoutControl: component to be used later
  return <label className={labelClassName} {...props} />
}

export { Label }
