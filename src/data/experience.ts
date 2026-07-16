export interface Role {
  title: string
  period: string
  highlights: string[]
  image?: string
}

export interface ExperienceEntry {
  company: string
  context?: string
  period: string
  images?: string[]
  roles: Role[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "Cloud & AI Technical Development",
    context: "Independent - AI-Assisted Engineering & Cloud Development",
    period: "June 2025 - Present",
    roles: [
      {
        title: "",
        period: "June 2025 - Present",
        highlights: [
          "Design and run AI-assisted development workflows end-to-end using Claude Code and other AI tools.",
          "Building AWS cloud foundations - Well-Architected Framework, networking, compute, storage, and security.",
        ],
      },
    ],
  },
  {
    company: "General Motors (GM) - Technical Center Israel",
    context: "R&D hub for Autonomous Vehicle (AV) and Advanced Driver Assistance System (ADAS) technologies.",
    period: "2021 - June 2025",
    roles: [
      {
        title: "Technical Project Manager",
        period: "2024–2025",
        image: "/ML-pipeline.png",
        highlights: [
          "Owned a synthetic data pipeline end-to-end, from PoC to production.",
          "Coordinated across Perception, DevOps, product, and program teams up to Director level, plus external vendors.",
          "Delivered 5,000+ ML training datasets across 6 projects and 3 global locations.",
          "Directed compute cluster migration pilots, improving pipeline reliability.",
          "Turned simulation workflows into self-service products - led 20+ global workshops, enabling 8 developers to self-serve.",
        ],
      },
      {
        title: "Simulation Operations Team Leader",
        period: "2022–2024",
        image: "/Point-cloud.png",
        highlights: [
          "Led a 5-person Simulation Operations team, driving tool adoption through training and support.",
          "Championed migration to a cloud-hosted platform, boosting adoption and scaling simulation capacity.",
          "Led release management for simulation packages - test plans, release notes, and quality deployments.",
          "Served as primary vendor interface - feature requests, roadmap, and make-or-buy recommendations to leadership.",
          "Managed Agile sprints and milestones, aligning priorities with management.",
        ],
      },
      {
        title: "System Validation Engineer",
        period: "2021",
        highlights: [
          "Collaborated with 50 US-based engineers and PMs to design and deliver simulation scenarios.",
        ],
      },
    ],
  },
  {
    company: "Israel Aerospace Industries (IAI) - Space Division",
    period: "2011 - 2021",
    images: ["/Operator-desk.png"],
    roles: [
      {
        title: "On-Orbit Operations & Systems Engineering",
        period: "",
        highlights: [
          "Primary engineering authority for in-orbit communications satellites - main PoC across global stakeholders.",
          "Owned a multi-year electrical power system anomaly - led telemetry analysis and coordinated with VP-level stakeholders.",
          "Led a mission-critical automation tool from requirements through production rollout, with zero tolerance for failure.",
          "Trained 100+ satellite operators; mentored junior engineers across the team.",
        ],
      },
      {
        title: "Satellite Orbital Management Lead",
        period: "",
        highlights: [
          "Led in-sourcing of orbital maneuver planning, building an in-house capability from scratch.",
          "Developed a data-driven optimization methodology for maneuver planning, delivering measurable cost savings.",
        ],
      },
      {
        title: "Software Acceptance Testing Team Leader",
        period: "",
        highlights: [
          "Led a software acceptance testing team - test procedures, requirements traceability, and defect tracking.",
        ],
      },
    ],
  },
]
