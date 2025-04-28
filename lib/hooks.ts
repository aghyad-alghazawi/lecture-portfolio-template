import { useEffect, useState } from "react"
import { NavLinks } from "@/lib/data"
import { useRouter, usePathname } from "next/navigation"

/**
 * Custom hook to track the currently active section based on scroll position.
 * Returns [activeSection, setActiveSection].
 */
export function useSectionScroll() {
  const [active, setActive] = useState<string>("")
  const pathname = typeof window !== "undefined" ? window.location.pathname : ""

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = ""
      let minDistance = Number.POSITIVE_INFINITY
      const viewportCenter = window.innerHeight / 2
      // If not on home page, set active to pathname (e.g. /blog)
      if (pathname !== "/") {
        setActive(pathname)
        if (window.location.hash && window.location.hash !== pathname) {
          history.replaceState(null, "", pathname)
        }
        return
      }
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
      if (currentSection && window.location.hash !== currentSection) {
        history.replaceState(null, "", currentSection)
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
  const router = useRouter();
  const pathname = usePathname();

  function navToSection(href: string) {
    if (pathname.startsWith("/blog")) {
      // Go to home, then scroll after navigation
      router.push("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          // In case element not found immediately, try again shortly
          setTimeout(() => {
            const el2 = document.getElementById(id);
            if (el2) el2.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      }, 500);
    } else {
      // Already on home, just scroll
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return navToSection;
}