import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main>
      <section>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>

        <Link href="/">
          <Button title="Go Back" />
        </Link>
      </section>
    </main>
  )
}
