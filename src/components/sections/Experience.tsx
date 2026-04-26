import { experience } from "@/data/experience"
import { TiltCard } from "@/components/TiltCard"

export function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-12">Experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--border)]" />
        {experience.map((entry, i) => (
          <div key={i} className="relative pl-10 pb-14 last:pb-0">
            <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[var(--accent)] -translate-x-1/2 ring-4 ring-[var(--background)]" />
            <div className="mb-5">
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-xl font-bold">{entry.company}</h3>
                <span className="text-sm font-medium text-[var(--accent)]">{entry.period}</span>
              </div>
              {entry.context && (
                <p className="text-sm text-[var(--muted)] mt-1">{entry.context}</p>
              )}
            </div>
            <div className="space-y-4">
              {entry.roles.map((role, j) => (
                <TiltCard key={j} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5 hover:border-[var(--accent)] transition-colors">
                  <div className="flex flex-wrap items-baseline gap-2 mb-4">
                    <h4 className="font-semibold text-[var(--foreground)]">{role.title}</h4>
                    <span className="text-xs text-[var(--muted)] bg-[var(--background)] px-2 py-0.5 rounded-full border border-[var(--border)]">
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {role.highlights.map((h, k) => (
                      <li key={k} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                        <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">▸</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
