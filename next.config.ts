import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  turbopack: {
    resolveExtensions: [".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig)
