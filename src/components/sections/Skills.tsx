"use client"

import { Icon } from "@iconify/react"
import { skills } from "@/data/skills"

const SKILL_ICONS: Record<string, string> = {
  // Project Management
  "Jira":             "logos:jira",
  "Confluence":       "logos:confluence",
  // DevOps & Cloud
  "Git":              "logos:git-icon",
  "Jenkins":          "logos:jenkins",
  "Docker":           "logos:docker-icon",
  "Linux":            "logos:linux-tux",
  "AWS":              "logos:aws",
  "GCP":              "logos:google-cloud",
  // Programming & Scripting
  "Python":           "logos:python",
  "Bash":             "logos:bash-icon",
  // Dev Tools
  "GitHub":           "logos:github-icon",
  "Bitbucket":        "logos:bitbucket",
  "VS Code":          "logos:visual-studio-code",
  "PyCharm":          "logos:pycharm",
  // Generative AI
  "Google AI Studio": "logos:google-gemini",
  "NotebookLM":       "logos:google-icon",
}

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
              {(items as readonly string[]).map((skill) => {
                const iconId = SKILL_ICONS[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                  >
                    {iconId && (
                      <Icon icon={iconId} width={14} height={14} />
                    )}
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
