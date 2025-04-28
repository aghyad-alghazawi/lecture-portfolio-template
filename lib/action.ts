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
      return { success: false, message: "Please fill in all fields." }
    }

    console.log("Contact form submitted:", { name, email, message })

    return { success: true, message: "Thank you for contacting us!" }
  } catch (error: unknown) {
    return {
      success: false,
      message:
        (error as Error)?.message ?? "Something went wrong. Please try again."
    }
  }
  finally {
    revalidatePath("/")
  }
}
