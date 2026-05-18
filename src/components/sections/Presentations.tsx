import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import { presentations } from "@/data/presentations"
import { TiltCard } from "@/components/TiltCard"

export function Presentations() {
  return (
    <section id="presentations" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Presentations</h2>
      <div className={`grid gap-6 ${presentations.length === 1 ? "max-w-2xl" : "sm:grid-cols-2"}`}>
        {presentations.map((p) => (
          <TiltCard
            key={p.title}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            {p.thumbnailPath && (
              <div className="aspect-video w-full relative">
                <Image
                  src={p.thumbnailPath}
                  alt={`${p.title} thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs px-2 py-0.5 rounded-full border border-[var(--accent)] text-[var(--accent)]">
                {p.audience}
              </span>
              {p.date && <span className="text-xs text-[var(--muted)]">{p.date}</span>}
            </div>
            <h3 className="text-lg font-bold">{p.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.topics.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {(p.slidesUrl || p.pdfPath) && (
                <Link
                  href={(p.slidesUrl ?? p.pdfPath)!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:opacity-80 transition-opacity"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  <ExternalLink size={15} />
                  View
                </Link>
              )}
              {p.pdfPath && (
                <a
                  href={p.pdfPath}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              )}
            </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
