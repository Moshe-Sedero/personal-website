import { GraduationCap } from "lucide-react"
import { education } from "@/data/education"
import { TiltCard } from "@/components/TiltCard"

export function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Education</h2>
      <div className="max-w-2xl space-y-6">
        {education.map((entry, i) => (
          <TiltCard
            key={i}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            <div className="w-full">
              <img
                src="/aerospace_faculty_image.png"
                alt="Aerospace Faculty"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-start gap-4 p-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                <GraduationCap size={20} className="text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--foreground)]">{entry.degree}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">{entry.institution}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}
