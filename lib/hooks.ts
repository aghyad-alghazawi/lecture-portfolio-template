import { useEffect, useState } from "react"
import { LINKS } from "@/lib/data"

/**
 * Custom hook to track the currently active section based on scroll position.
 * Returns [activeSection, setActiveSection].
 */
export function useSectionScroll() {
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

  return [active, setActive] as const
}