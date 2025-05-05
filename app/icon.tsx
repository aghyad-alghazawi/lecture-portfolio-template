import { ImageResponse } from "next/og"

// Image metadata
export const size = {
  width: 256,
  height: 256
}

export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="256" height="256" viewBox="0 0 256 256" fill="none">
        <path
          d="M128.216 69.704C101.552 69.704 79.128 88 72.288 112.544C66.336 99.416 53.16 90.08 37.88 90.08C17.008 90.208 0.088 107.128 0 128C0.088 148.872 17 165.792 37.88 165.92C53.168 165.92 66.296 156.584 72.288 143.416C79.128 168 101.544 186.296 128.216 186.296C154.712 186.296 177.008 168.216 184 143.832C190.04 156.752 203 165.92 218.08 165.92C239 165.792 255.912 148.872 256 128C255.912 107.128 239 90.208 218.08 90.08C203 90.08 190.04 99.256 183.96 112.168C177.008 87.784 154.712 69.704 128.216 69.704ZM128.216 91.96C148.216 91.96 164.216 107.96 164.216 128C164.216 148.04 148.216 164.04 128.216 164.04C108.248 164.128 92.088 147.912 92.176 128C92.176 107.96 108.176 91.96 128.216 91.96ZM37.88 112.328C46.672 112.328 53.552 119.208 53.552 128C53.552 136.792 46.672 143.672 37.88 143.672C29.208 143.76 22.128 136.664 22.256 128C22.256 119.208 29.128 112.328 37.88 112.328ZM218.08 112.328C226.88 112.328 233.752 119.208 233.752 128C233.752 136.792 226.88 143.672 218.08 143.672C209.416 143.76 202.376 136.664 202.456 128C202.456 119.208 209.336 112.328 218.08 112.328Z"
          fill="white"
        />
      </svg>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size
    }
  )
}
