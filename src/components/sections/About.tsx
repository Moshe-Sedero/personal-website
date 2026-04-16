import { profile } from "@/data/profile"

export function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">About</h2>
      <ul className="space-y-4">
        {profile.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--accent)] mt-1 flex-shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
