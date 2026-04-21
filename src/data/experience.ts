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
        title: "Independent Technical Development",
        period: "June 2025 - Present",
        highlights: [
          "Designed AI-assisted development workflows orchestrating Claude, NotebookLM, Gemini, Lovable, and Claude Code. Authored SOPs, application specifications, and phased build plans, and directed agentic AI development from architecture through implementation, testing, and version control across multiple personal projects.",
          "AWS cloud fundamentals - conceptual understanding of AWS Well-Architected Framework, networking, compute, containers, databases, and security architecture through structured self-study.",
          "Configured Google Cloud Platform projects for Gemini API access - including API key management, billing setup, and usage monitoring via GCP dashboards.",
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
          "Led the rollout of simulation-based synthetic-data pipeline from Proof-of-Concept (PoC) to production deployment, delivered 5,000+ ML training datasets across 6+ projects and 3 global locations.",
          "Coordinated with dozens of stakeholders across engineering, product, program, and vendor; provided clear updates to Director-level leadership, ensured successful execution and alignment with project requirements and timelines.",
          "Directed cloud migration pilots across compute clusters, improved user experience and pipeline reliability.",
          "Transformed AI workflows to scalable self-service products, reduced team dependency and empowered customers. Built training and knowledge resources, led global workshops (20+), and enabled 8 developers to self-serve.",
        ],
      },
      {
        title: "Team Leader SimOps - Simulation Operations",
        period: "2022–2024",
        highlights: [
          "Led the Simulation Operations team (SimOps), bridged developers and engineering teams to drive simulation enablement and adoption among internal customers through training, documentation, and customer-facing support.",
          "Agile methodology - Planned Sprints and Milestones, aligned priorities with management, defined DoDs, authored Stories, managed day-to-day activities, mentored and promoted the growth of my team members.",
          "Championed tools migration from local desktops to a cloud-hosted Web UI platform, eliminated key pain points for customers, boosted adoption by engineering teams, and significantly scaled customer productivity.",
          "Led release management of simulation packages and platform versions, created regression and acceptance test plans and authored release notes to ensure smooth, high-quality deployments.",
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
        title: "Systems Engineer & Technical Operations Lead",
        period: "2011–2021",
        highlights: [
          "Technical owner for geostationary communications satellites; main engineering PoC for suppliers, customers, and cross-functional teams. Led anomaly resolution with data-driven mitigation plans with global specialists.",
          "Led release management and end-to-end deployment of automation tools: defined requirements, coordinated development, supervised validation, and managed OTA production rollout.",
          "Led a software acceptance testing team. Prepared Acceptance Test Procedures (ATP), mapped test suites to Software Requirements (SRS). Implemented requirements traceability and defect-tracking workflows.",
          "Led in-sourcing of core activities from external vendor, establishing independent in-house capability.",
        ],
      },
    ],
  },
]
