"use server"

import { revalidatePath } from "next/cache"

type formState = {
  success: boolean
  message: string
}

export async function sendMessage(state: formState, formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      console.log("Validation failed")
      return { success: false, message: "Please fill in all fields." }
    }

    if (!email.includes("@gmail.com")) {
      console.log("Invalid email")
      return { success: false, message: "Please enter a valid email address." }
    }

    await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to send message")
        }
      })
      .catch((error) => {
        console.log(error)
        return { success: false, message: "Failed to send message" }
      })

    console.log("Contact form submitted:", { name, email, message })

    return { success: true, message: "Thank you for contacting us!" }
  } catch (error: unknown) {
    return {
      success: false,
      message:
        (error as Error)?.message ?? "Something went wrong. Please try again."
    }
  } finally {
    revalidatePath("/")
  }
}
