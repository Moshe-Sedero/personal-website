export interface Project {
  name: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  youtubeId?: string
  highlights: string[]
  builtWith?: string
  badgeColor?: string
}

export const projects: Project[] = [
  {
    name: "Synthetic Data Pipeline - AV Perception",
    builtWith: "General Motors R&D",
    badgeColor: "#64748b",
    description:
      "End-to-end simulation-based synthetic data pipeline taken from PoC to production - generating ML training datasets for autonomous vehicle perception model teams across 3 global locations.",
    techStack: ["Simulation", "ML Pipelines", "Python", "AWS", "CI/CD", "Agile"],
    highlights: [
      "Owned full delivery lifecycle: requirements, development, testing, and data production",
      "Delivered 5,000+ ML training datasets across 6 active projects",
      "Transformed workflow into self-service product - trained 8 developers across 20+ global workshops",
      "Directed infrastructure migration across compute clusters, improving pipeline reliability",
    ],
  },
  {
    name: "Satellite Electrical Power System - Anomaly Response",
    builtWith: "Israel Aerospace Industries",
    badgeColor: "#b45309",
    description:
      "Led sustained multi-year technical response to a high-stakes electrical power system anomaly on a geostationary communications satellite - coordinating with international stakeholders under zero-tolerance operational conditions.",
    techStack: ["Satellite Systems", "Systems Engineering", "Telemetry", "Risk Management"],
    highlights: [
      "Performed deep telemetry analysis and parameter prediction to assess failure modes",
      "Coordinated response with VP-level customer stakeholders and international hardware manufacturers",
      "Designed and implemented preventive action plans maintaining continuous satellite operations",
    ],
  },
  {
    name: "KCD2 Dice Game",
    description:
      "Recreation of the Kingdom Come: Deliverance 2 dice minigame (Farkle variant). Turn-based push-your-luck game with human vs AI opponent with strategic risk-based decision making.",
    techStack: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vitest"],
    githubUrl: "https://github.com/Moshe-Sedero/kcd2-dice-game-Claude-Code",
    youtubeId: undefined,
    highlights: [
      "Full scoring engine covering all Farkle dice combinations",
      "Strategic AI opponent with dynamic risk assessment based on game state",
      "Medieval tavern aesthetic with animated SVG dice",
      "13 unit tests for the scoring engine (Vitest)",
    ],
    builtWith: "Claude Code",
  },
]
