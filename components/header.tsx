"use client"

import { LINKS } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ""
      let minDistance = Number.POSITIVE_INFINITY
      const viewportCenter = window.innerHeight / 2
      LINKS.forEach((link) => {
        const id = link.href.replace("#", "")
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionCenter = rect.top + rect.height / 2
          const distance = Math.abs(sectionCenter - viewportCenter)
          if (distance < minDistance) {
            minDistance = distance
            currentSection = link.href
          }
        }
      })
      setActive(currentSection)
      // Update the URL hash without reloading or scrolling
      if (currentSection && window.location.hash !== currentSection) {
        history.replaceState(null, "", currentSection)
      }
    }

    document.body.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      document.body.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header>
      <span>
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
        </Link>
      </span>
      <nav>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            data-active={active === link.href ? "true" : undefined}
            data-slot="nav-link"
            onClick={(e) => {
              setActive(link.href)
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export { Header }
