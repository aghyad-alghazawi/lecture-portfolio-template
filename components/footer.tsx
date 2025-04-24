import { SOCIALS } from "@/lib/data";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Facebook />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  mail: <Mail />,
};

const Footer = () => (
  <footer>
    <small>
      &copy; {new Date().getFullYear()}&nbsp;
      <span>Your Name</span>. 
      All rights reserved.
    </small>
    <span>
      {SOCIALS.map(({ name, url, icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="footer-social-link"
        >
          {iconMap[icon]}
        </a>
      ))}
    </span>
  </footer>
);

export { Footer };
