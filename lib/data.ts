import type { Link, Project } from "@/lib/types"

export const NavLinks: Link[] = [
  {
    label: "Home",
    href: "#hero",
    icon: "home"
  },
  {
    label: "Projects",
    href: "#projects",
    icon: "backpack"
  },
  {
    label: "About",
    href: "#about",
    icon: "info"
  },
  {
    label: "Contact",
    href: "#contact",
    icon: "send"
  }
]

export const Socials: Link[] = [
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: "github"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: "twitter"
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: "mail"
  }
]

export const Projects: Project[] = [
  {
    title: "Project 1",
    description: "Description of project 1.",
    thumbnail: "/images/project-thumbnail.png",
    url: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of project 2.",
    thumbnail: "/images/project-thumbnail.png",
    url: "https://github.com/yourusername/project2"
  },
  {
    title: "Project 3",
    description: "Description of project 3.",
    thumbnail: "/images/project-thumbnail.png",
    url: "https://github.com/yourusername/project3"
  },
  {
    title: "Project 4",
    description: "Description of project 4.",
    thumbnail: "/images/project-thumbnail.png",
    url: "https://github.com/yourusername/project4"
  }
]

export const Info = {
  name: "Your Name",
  title: "Your Title",
  description: "A brief description about yourself.",
  email: "your@email",
  bio: "I am a passionate developer with a love for building beautiful and functional web applications. With experience in React, Next.js, and modern web technologies, I enjoy turning ideas into reality.",
  experience: [
    {
      title: "Frontend Developer",
      details:
        "3+ years building responsive UIs with React, Next.js, and TypeScript."
    },
    {
      title: "UI/UX Designer",
      details:
        "Skilled in designing clean, modern interfaces and user experiences."
    },
    {
      title: "Open Source Contributor",
      details:
        "Contributor to several open source projects and active in the dev community."
    },
    {
      title: "Skills",
      details:
        "JavaScript, TypeScript, React, Next.js, CSS Modules, Figma, Git, REST APIs"
    }
  ]
}
