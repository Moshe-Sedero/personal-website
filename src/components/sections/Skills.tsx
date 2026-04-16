import { skills } from "@/data/skills"

export function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-5 space-y-3"
          >
            <h3 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(items as readonly string[]).map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
