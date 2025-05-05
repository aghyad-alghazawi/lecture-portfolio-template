"use client"

import Link from "next/link"
import Image from "next/image"
import { useSectionScroll, useNavSection } from "@/lib/hooks"
import { NavLinks } from "@/lib/data"
import { Home, Backpack, Info, Newspaper, Send } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  home: <Home />,
  backpack: <Backpack />,
  info: <Info />,
  send: <Send />,
  newspaper: <Newspaper />
}

const Header = () => {
  const [active, setActive] = useSectionScroll()
  const navToSection = useNavSection()

  const handleNavLinkClick = (href: string) => {
    setActive(href)
    navToSection(href)
  }

  return (
    <header>
      <span>
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
        </Link>
      </span>
      <nav>
        {NavLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            data-active={active === link.href ? "true" : undefined}
            data-slot="nav-link"
            onClick={(e) => {
              // e.preventDefault()
              handleNavLinkClick(link.href)
            }}
          >
            <span data-icon>{link.icon && iconMap[link.icon]}</span>
            <span data-label>{link.label}</span>
          </a>
        ))}
        <hr
          style={{
            color: "var(--color-muted)",
            backgroundColor: "var(--color-muted)",
            width: "2px",
            borderRadius: "var(--radius)"
          }}
        />
        <Link
          href="/blog"
          data-active={active === "/blog" ? "true" : undefined}
          data-slot="nav-link"
          onClick={() => {
            handleNavLinkClick("/blog")
          }}
        >
          <span data-icon>{iconMap.newspaper}</span>
          <span data-label>Blog</span>
        </Link>
      </nav>
    </header>
  )
}

export { Header }
