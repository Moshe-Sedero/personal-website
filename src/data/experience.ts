export interface Role {
  title: string
  period: string
  highlights: string[]
}

export interface ExperienceEntry {
  company: string
  context?: string
  period: string
  roles: Role[]
}

export const experience: ExperienceEntry[] = [
  {
    company: "Cloud & AI Technical Development",
    context: "Self-Directed",
    period: "June 2025 - Present",
    roles: [
      {
        title: "",
        period: "June 2025 - Present",
        highlights: [
          "Designing and directing AI-assisted development workflows - leveraging Claude Code and multiple AI tools across personal projects from architecture to implementation, authoring SOPs, application specifications, and build plans.",
          "Expanding technical foundation through AWS cloud fundamentals self-study - covering Well-Architected Framework, networking, compute, storage, containers, databases, and security architecture.",
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
        highlights: [
          "Owned end-to-end delivery of a simulation-based synthetic data pipeline from PoC to production - drove requirements, development, testing, and data delivery through to completion.",
          "Coordinated across Perception, software development, cloud infrastructure, DevOps, product, and program teams - from individual developers to Director-level leadership - alongside external simulation software vendor management.",
          "Delivered 5,000+ ML training datasets across 6 projects and 3 global locations, enabling perception model training.",
          "Directed infrastructure migration pilots across compute clusters, improving pipeline reliability and user experience.",
          "Transformed simulation workflows into scalable self-service products - reduced team dependency, built training and knowledge resources, led global workshops (20+), and enabled 8 developers to self-serve.",
        ],
      },
      {
        title: "Simulation Operations Team Leader",
        period: "2022–2024",
        highlights: [
          "Led a 5-person Simulation Operations team - bridged simulation developers, infrastructure teams, and internal engineering customers to drive tool adoption through training, documentation, and customer-facing support.",
          "Championed migration from local desktop tools to a cloud-hosted platform - eliminated key pain points, boosted adoption across engineering teams, and significantly scaled simulation capacity.",
          "Led release management of simulation packages and platform versions - defined regression and acceptance test plans, authored release notes, and ensured smooth, high-quality deployments.",
          "Served as primary vendor interface - managed feature requests, bug triage, and roadmap discussions; led make-or-buy evaluations and provided strategic recommendations to leadership.",
          "Managed Agile sprints and milestones - aligned priorities with management, defined DoDs and authored stories.",
        ],
      },
      {
        title: "System Validation Engineer",
        period: "2021",
        highlights: [
          "Collaborated with 50 US-based System Engineers, PMs and TPMs - designed and delivered simulation scenarios.",
        ],
      },
    ],
  },
  {
    company: "Israel Aerospace Industries (IAI) - Space Division",
    period: "2011 - 2021",
    roles: [
      {
        title: "On-Orbit Operations & Systems Engineering",
        period: "",
        highlights: [
          "Served as primary engineering authority for in-orbit geostationary communications satellites - main PoC for satellite owners, payload customers, hardware manufacturers, and cross-functional teams across multiple geographies.",
          "Owned a multi-year high-stakes electrical power system anomaly - led sustained technical response including deep telemetry analysis, parameter prediction, and preventive action planning; coordinated with VP-level customer stakeholders and international manufacturer specialists.",
          "Led development and deployment of a mission-critical automation tool - defined requirements, coordinated software development, supervised validation, and managed production rollout - ensuring continuous operational coverage during critical satellite periods with zero tolerance for failure.",
          "Trained 100+ satellite operators; mentored junior engineers across the team.",
        ],
      },
      {
        title: "Satellite Orbital Management Lead",
        period: "",
        highlights: [
          "Led in-sourcing of orbital maneuver planning and analysis from an external Flight Dynamics team - established independent in-house capability from scratch.",
          "Developed a data-driven optimization methodology for orbital maneuver planning - iteratively ran simulations, executed maneuvers, compared predicted vs. actual results - delivering measurable cost savings to the company.",
        ],
      },
      {
        title: "Software Acceptance Testing Team Leader",
        period: "",
        highlights: [
          "Led a software acceptance testing team - authored test procedures, mapped test coverage to software requirements, and implemented requirements traceability and defect-tracking workflows.",
        ],
      },
    ],
  },
]
