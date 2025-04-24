import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { INFO } from "@/lib/data"

const Hero = () => {
  return (
    <section id="hero">
      <h1>{INFO.name}</h1>
      <p>Short tagline or intro goes here.</p>
      <Button title="Click Me" icon={ArrowRight} size="large" />
    </section>
  )
}

export { Hero }
