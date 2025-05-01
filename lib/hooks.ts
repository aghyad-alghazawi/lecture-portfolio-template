import { useEffect, useState } from "react"
import { NavLinks } from "@/lib/data"
import { useRouter, usePathname } from "next/navigation"

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
      let currentSection = ""
      let minDistance = Number.POSITIVE_INFINITY
      const viewportCenter = window.innerHeight / 2
      
      // If not on home page, set active to pathname (e.g. /blog)
      if (pathname !== "/") {
        // If on a blog subroute, set active to '/blog' for any /blog or /blog/*
        if (pathname === "/blog" || pathname.startsWith("/blog/")) {
          setActive("/blog")
          return
        }
        setActive(pathname)
        return
      }

      // Check sections on home page
      NavLinks.forEach((link) => {
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
    if (pathname.startsWith("/blog")) {
      // Go to home, then scroll after navigation
      router.push("/")
      // Wait for navigation to complete
      setTimeout(() => {
        const id = href.replace("#", "")
        const el = document.getElementById(id)
        if (el) {
          // Scroll to element with a small offset to ensure it's fully visible
          el.scrollIntoView({ 
            behavior: "smooth",
            block: "start",
            inline: "nearest"
          })
        } else {
          // Try again after a short delay
          setTimeout(() => {
            const el2 = document.getElementById(id)
            if (el2) {
              el2.scrollIntoView({ 
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              })
            }
          }, 200)
        }
      }, 300) // Reduced timeout for faster navigation
    } else {
      // Already on home, just scroll
      const id = href.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ 
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        })
      }
    }
  }

  return navToSection
}
