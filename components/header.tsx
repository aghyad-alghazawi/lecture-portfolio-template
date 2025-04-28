"use client"

import Link from "next/link"
import Image from "next/image"
import { useSectionScroll, useNavSection } from "@/lib/hooks"
import { NavLinks } from "@/lib/data"

const Header = () => {
  const [active, setActive] = useSectionScroll()
  const navToSection = useNavSection()

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
              e.preventDefault()
              navToSection(link.href)
              setActive(link.href)
            }}
          >
            {link.label}
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
            setActive("/blog")
          }}
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}

export { Header }
