"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TextArea } from "@/components/ui/textarea"
import { sendMessage } from "@/lib/action"
import { useActionState } from "react"
import { toast } from "sonner"

const initialState = { success: false, message: "" }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: typeof initialState, formData: FormData) => {
      const result = await sendMessage(prevState, formData)
      toast(result.message)
      return result
    },
    initialState
  )

  return (
    <div data-slot="contact-form">
      <form action={formAction}>
        <Label htmlFor="name" size="small">
          Name
        </Label>
        <Input id="name" name="name" required uiSize="medium" />

        <Label htmlFor="email" size="small">
          Email
        </Label>
        <Input id="email" name="email" type="email" required uiSize="medium" />

        <Label htmlFor="message" size="small">
          Message
        </Label>
        <TextArea id="message" name="message" required />

        <Button
          type="submit"
          title={isPending ? "Sending..." : "Send"}
          size="medium"
          disabled={isPending}
        />
      </form>
    </div>
  )
}
