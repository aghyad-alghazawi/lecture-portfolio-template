"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Errors({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main>
      <section>
        <h2>Something went wrong!</h2>
        <Button title="Refresh" onClick={() => reset()} />
      </section>
    </main>
  )
}
