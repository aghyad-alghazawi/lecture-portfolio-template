"use client"

import { Toaster } from "sonner"

export function Sonner() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "var(--color-card)",
          color: "var(--color-text)",
          border: "1px solid var(--color-text)"
        }
      }}
    />
  )
}
