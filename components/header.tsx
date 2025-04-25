"use client"

import { LINKS } from "@/lib/data"
import { useSectionScroll } from "@/lib/hooks"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  const [active, setActive] = useSectionScroll()

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
            onClick={() => setActive(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export { Header }
