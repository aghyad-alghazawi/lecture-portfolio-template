import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    mdxRs: true
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  turbopack: {
    resolveExtensions: [".js", ".jsx", ".md", ".mdx", ".ts", ".tsx"]
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/my-bucket/**",
        search: ""
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      }
    ]
  }
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default withMDX(nextConfig)
