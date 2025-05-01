import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hasTitle = searchParams.has("title")
  const title = hasTitle ? searchParams.get("title") : "Blog"

  // Example of loading an image
  const imageData = await fetch(
    new URL("@/public/images/og-image.svg", import.meta.url)
  ).then((res) => res.arrayBuffer())

  // Example of loading a font
  const fontData = await fetch(
    new URL("@/public/fonts/brontide-vp.otf", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      data-og="true"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(imageData)))})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        fontSize: 96,
        fontFamily: "Brontide",
        textShadow: "0 4px 12px rgba(0,0,0,0.4)",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      {title}
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "fontData",
          data: fontData,
          weight: 600,
          style: "normal"
        }
      ],
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "image/png"
      }
    }
  )
}