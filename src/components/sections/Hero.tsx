import Link from "next/link"
import { Download, MessageSquare } from "lucide-react"
import { profile } from "@/data/profile"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <div className="space-y-6 max-w-3xl">
        <div className="space-y-2">
          <p className="text-sm text-[var(--accent)] font-medium tracking-wider uppercase">
            Available for new opportunities
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl text-[var(--muted)] font-normal">
            {profile.title}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--border)] text-sm text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
          >
            <Download size={16} />
            Download CV
          </Link>
          <Link
            href="/assistant"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--accent)] text-white text-sm hover:bg-blue-600 transition-colors"
          >
            <MessageSquare size={16} />
            Chat with my AI ↗
          </Link>
        </div>
      </div>
    </section>
  )
}
