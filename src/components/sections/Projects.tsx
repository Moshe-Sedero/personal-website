import Link from "next/link"
import { ExternalLink, Code2 } from "lucide-react"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold mb-10">Projects</h2>
      <div className={`grid gap-6 ${projects.length === 1 ? "max-w-2xl" : "sm:grid-cols-2"}`}>
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-colors"
          >
            {project.youtubeId && (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}`}
                  title={`${project.name} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{project.name}</h3>
                {project.builtWith && (
                  <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border border-[var(--accent)] text-[var(--accent)]">
                    {project.builtWith}
                  </span>
                )}
              </div>

              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--muted)] leading-relaxed">
                    <span className="text-[var(--accent)] flex-shrink-0 mt-0.5">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
                >
                  <Code2 size={15} />
                  View on GitHub
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
