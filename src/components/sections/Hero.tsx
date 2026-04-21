import Link from "next/link"
import { Download, MessageSquare } from "lucide-react"
import { profile } from "@/data/profile"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <div className="space-y-8 max-w-3xl">
        <div className="space-y-3">
          <p className="text-xs text-[var(--accent)] font-semibold tracking-[0.2em] uppercase">
            Available for new opportunities
          </p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-[var(--muted)] font-normal">
            {profile.title}
          </h2>
        </div>

        <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl border-l-2 border-[var(--accent)] pl-4">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)] hover:border-[var(--accent)] transition-all"
          >
            <Download size={16} />
            Download CV
          </Link>
          <Link
            href="/assistant"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg"
            style={{ boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 40%, transparent)" }}
          >
            <MessageSquare size={16} />
            Chat with my AI ↗
          </Link>
        </div>
      </div>
    </section>
  )
}
