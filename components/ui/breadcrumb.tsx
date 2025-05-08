import styles from "@/styles/modules/breadcrumb.module.css"
import Link from "next/link"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: string
}

export function Breadcrumb({ items, separator = "/" }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol>
        {items.map((item, idx) => (
          <li key={item.label} className={`${styles.item}`}>
            {item.href && idx !== items.length - 1 ? (
              <Link
                href={item.href}
                className={`${idx === 0 ? styles.first : ""}`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <span className={styles.separator}>{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
