import type { MDXComponents } from "mdx/types"
import Image, { type ImageProps } from "next/image"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1>{children}</h1>
    ),
    img: (props) => (
      <Image
        sizes="100%"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components
  }
}