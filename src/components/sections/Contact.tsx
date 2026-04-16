import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"
import { profile } from "@/data/profile"

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, display: profile.email },
  { label: "LinkedIn", href: profile.linkedin, icon: ExternalLink, display: "linkedin.com/in/moshe-sedero" },
  { label: "GitHub", href: profile.github, icon: ExternalLink, display: "github.com/Moshe-Sedero" },
]

export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Contact</h2>
      <div className="space-y-4">
        {contactLinks.map(({ label, href, icon: Icon, display }) => (
          <Link
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel={label !== "Email" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 group"
          >
            <Icon size={18} className="text-[var(--accent)]" />
            <span className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              {display}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
