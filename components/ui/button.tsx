import React from 'react';
import styles from "@/styles/modules/button.module.css"


interface ButtonProps extends React.ComponentProps<"button"> {
  title: string;
  variant?: "primary" | "success" | "error";
  size?: "small" | "medium" | "large";
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}

const Button = ({ title, icon: Icon, variant, size = "medium", ...props }: ButtonProps) => {
  const buttonClassName = `${styles.button} ${variant ? styles[variant] : ""} ${styles[size]}`

  return (
    <button type="button" className={buttonClassName} {...props}>
      {title}
      {Icon && (
        <span className={styles.icon}>
          <Icon size={size === "small" ? 16 : size === "large" ? 24 : 20} />
        </span>
      )}
    </button>
  )
}

export { Button }