import { Socials } from "@/lib/data"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  github: <Github />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  mail: <Mail />
}

const Footer = () => (
  <footer>
    <small>
      &copy; {new Date().getFullYear()}&nbsp;
      <span>Your Name</span>. All rights reserved.
    </small>
    <span>
      {Socials.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon && iconMap[icon]}
        </a>
      ))}
    </span>
  </footer>
)

export { Footer }
