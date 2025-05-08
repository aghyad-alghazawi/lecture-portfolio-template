import { NavLinks } from "@/lib/data"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * Custom hook to track the currently active section based on scroll position.
 * Returns [activeSection, setActiveSection].
 */
export function useSectionScroll() {
  const [active, setActive] = useState<string>("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const currentPath = pathname
      let currentHash = window.location.hash
      let minDistance = Number.POSITIVE_INFINITY
      const viewportCenter = window.innerHeight / 2

      // Handle blog page separately
      if (currentPath.startsWith("/blog")) {
        setActive("/blog")
        return
      }

      // Handle home page section navigation
      if (currentPath === "/") {
        NavLinks.forEach((link) => {
          const id = link.href.replace("#", "")
          const section = document.getElementById(id)
          if (section) {
            const rect = section.getBoundingClientRect()
            const sectionCenter = rect.top + rect.height / 2
            const distance = Math.abs(sectionCenter - viewportCenter)
            if (distance < minDistance) {
              minDistance = distance
              currentHash = link.href
            }
          }
        })

        setActive(currentHash)
        if (currentHash && window.location.hash !== currentHash) {
          history.replaceState(null, "", currentHash)
        }
      }
    }

    document.body.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      document.body.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return [active, setActive] as const
}

// Custom hook for section navigation with blog redirect logic
export function useNavSection() {
  const router = useRouter()
  const pathname = usePathname()

  function navToSection(href: string) {
    const isHashLink = href.startsWith("#")

    if (pathname.startsWith("/blog") || !pathname.includes("/")) {
      // Navigate home with the hash directly
      router.push(`/${isHashLink ? href : ""}`, { scroll: true })

      // Wait for hydration, then scroll manually
      setTimeout(() => {
        const id = href.replace("#", "")
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 100)
    } else {
      // Already on home
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return navToSection
}
