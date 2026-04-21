import { skills } from "@/data/skills"
import {
  SiJira, SiConfluence,
  SiGit, SiJenkins, SiDocker, SiLinux, SiGooglecloud,
  SiPython, SiGnubash,
  SiGithub, SiBitbucket, SiPycharm,
  SiAnthropic, SiGoogle,
} from "react-icons/si"
import type { IconType } from "react-icons"

interface SkillIconDef {
  icon: IconType
  color: string
}

const SKILL_ICONS: Record<string, SkillIconDef> = {
  "Jira":             { icon: SiJira,                 color: "#0052CC" },
  "Confluence":       { icon: SiConfluence,            color: "#0052CC" },
  "Git":              { icon: SiGit,                   color: "#F05032" },
  "Jenkins":          { icon: SiJenkins,               color: "#D24939" },
  "Docker":           { icon: SiDocker,                color: "#2496ED" },
  "Linux":            { icon: SiLinux,                 color: "#FCC624" },
  "GCP":              { icon: SiGooglecloud,            color: "#4285F4" },
  "Python":           { icon: SiPython,                color: "#3776AB" },
  "Bash":             { icon: SiGnubash,               color: "#4EAA25" },
  "GitHub":           { icon: SiGithub,                color: "#ffffff" },
  "Bitbucket":        { icon: SiBitbucket,             color: "#0052CC" },
  "PyCharm":          { icon: SiPycharm,               color: "#21D789" },
  "Claude Code":      { icon: SiAnthropic,             color: "#D97706" },
  "Google AI Studio": { icon: SiGoogle,                color: "#4285F4" },
  "NotebookLM":       { icon: SiGoogle,                color: "#4285F4" },
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
                const iconDef = SKILL_ICONS[skill]
                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                  >
                    {iconDef && (
                      <iconDef.icon size={13} style={{ color: iconDef.color, flexShrink: 0 }} />
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
