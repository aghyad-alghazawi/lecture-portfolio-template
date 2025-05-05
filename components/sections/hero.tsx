import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Info } from "@/lib/data"

const Hero = () => {
  return (
    <section id="hero">
      <h1>{Info.name}</h1>
      <p>Short tagline or intro goes here.</p>
      <Link href="/test">
        <Button title="Click Me" icon={ArrowRight} size="large" />
      </Link>
    </section>
  )
}

export { Hero }
