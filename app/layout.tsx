import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { roboto, robotoMono } from "@/lib/fonts"
import type { Metadata } from "next"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Our first project"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
