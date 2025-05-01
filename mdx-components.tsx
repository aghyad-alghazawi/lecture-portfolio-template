import type { MDXComponents } from "mdx/types"
import Link from "next/link"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({ href, ...props }) => {
      if (href?.startsWith('/')) {
        return (
          <Link href={href} {...props}>
            {props.children}
          </Link>
        )
      }

      if (href?.startsWith('#')) {
        return <a {...props} />
      }

      return <a target="_blank" rel="noopener noreferrer" {...props} />
    }
  }
}
