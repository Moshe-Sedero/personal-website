"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"
import { experience } from "@/data/experience"
import { TiltCard } from "@/components/TiltCard"

export function Experience() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    experience.forEach((entry) => {
      entry.roles.forEach((_, j) => {
        initial[`${entry.company}-${j}`] = false
      })
    })
    return initial
  })

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-12">Experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />
        {experience.map((entry, i) => (
          <div key={i} className="relative pl-10 pb-14 last:pb-0">
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 ring-4 ring-[var(--background)]" style={{ background: "var(--accent-60)" }} />
            <div className="mb-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-bold">{entry.company}</h3>
                <span className="text-sm font-medium text-[var(--accent)]">{entry.period}</span>
              </div>
              {entry.context && (
                <p className="text-sm text-[var(--muted)] mt-1">{entry.context}</p>
              )}
            </div>

            {entry.images && entry.images.length > 0 && (
              <div className={`grid gap-3 mb-5 ${entry.images.length === 1 ? "grid-cols-1 max-w-sm md:max-w-2xl" : "grid-cols-2"}`}>
                {entry.images.map((src, k) => (
                  <div key={k} className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)]">
                    <Image
                      src={src}
                      alt={`${entry.company} visual ${k + 1}`}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-4">
              {entry.roles.map((role, j) => {
                const key = `${entry.company}-${j}`
                const isOpen = expanded[key] ?? false
                return (
                  <div key={j}>
                    <TiltCard className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] transition-colors">
                      <div
                        className={`flex items-center justify-between gap-2 cursor-pointer ${isOpen ? "mb-4" : ""}`}
                        onClick={() => toggle(key)}
                        aria-expanded={isOpen}
                        role="button"
                      >
                        <div className="flex flex-wrap items-baseline gap-2">
                          {role.title && (
                            <h4 className="font-semibold text-[var(--foreground)]">{role.title}</h4>
                          )}
                          {role.period && (
                            <span className="text-xs text-[var(--muted)] bg-[var(--background)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                              {role.period}
                            </span>
                          )}
                        </div>
                        <span
                          className="flex items-center gap-1 flex-shrink-0 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors"
                          style={{
                            color: "var(--accent)",
                            borderColor: "var(--accent-40)",
                            background: isOpen ? "var(--accent-40)" : "transparent",
                          }}
                        >
                          {isOpen ? "Hide details" : "Show details"}
                          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </span>
                      </div>
                      {isOpen && (
                        <ul className="space-y-2.5">
                          {role.highlights.map((h, k) => (
                            <li key={k} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                              <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-50)" }}>▸</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </TiltCard>
                    {role.image && (
                      <div className="max-w-sm md:max-w-2xl mt-3">
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-[var(--border)]">
                          <Image
                            src={role.image}
                            alt={`${role.title} visual`}
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
