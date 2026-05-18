import Link from "next/link"
import Image from "next/image"
import { Download, MessageSquare } from "lucide-react"
import { profile } from "@/data/profile"
import { StatsRow } from "@/components/StatsRow"

export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-16">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Photo - above text on mobile, right on desktop */}
        <div className="order-first lg:order-last flex-shrink-0">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40">
            <Image
              src="/Moshe_Sedero_Profile_Picture.png"
              alt="Moshe Sedero"
              fill
              className="rounded-full object-cover"
              style={{
                boxShadow: "0 0 0 2px var(--accent), 0 0 20px color-mix(in srgb, var(--accent) 20%, transparent)",
              }}
              priority
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <p className="text-xs text-[var(--accent)] font-semibold tracking-[0.2em] uppercase">
              Available for new opportunities
            </p>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-white via-white to-[var(--accent)] bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] leading-snug">
              {profile.heroTagline}
            </h2>
            <p className="text-sm text-[var(--muted)] font-normal">
              {profile.heroSubTagline}
            </p>
          </div>

          <p className="text-base text-[var(--muted)] leading-relaxed max-w-2xl border-l-2 border-[var(--accent)] pl-4">
            {profile.tagline}
          </p>

          {/* Stats row */}
          <div style={{ marginTop: "2.5rem", marginBottom: "2rem" }}>
            <StatsRow />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium transition-all hover:opacity-80"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
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
              Chat with my AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
