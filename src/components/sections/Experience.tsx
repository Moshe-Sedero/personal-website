import { experience } from "@/data/experience"

export function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Experience</h2>
      <div className="space-y-12">
        {experience.map((entry, i) => (
          <div key={i} className="border-l-2 border-[var(--border)] pl-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">{entry.company}</h3>
              {entry.context && (
                <p className="text-sm text-[var(--muted)] mt-0.5">{entry.context}</p>
              )}
              <p className="text-sm text-[var(--accent)] mt-0.5">{entry.period}</p>
            </div>
            {entry.roles.map((role, j) => (
              <div key={j} className="space-y-3">
                <div>
                  <h4 className="font-medium">{role.title}</h4>
                  <p className="text-xs text-[var(--muted)]">{role.period}</p>
                </div>
                <ul className="space-y-2">
                  {role.highlights.map((h, k) => (
                    <li key={k} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                      <span className="text-[var(--accent)] flex-shrink-0">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
