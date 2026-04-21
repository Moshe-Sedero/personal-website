export interface Project {
  name: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  youtubeId?: string
  highlights: string[]
  builtWith?: string
}

export const projects: Project[] = [
  {
    name: "KCD2 Dice Game",
    description: "Recreation of the Kingdom Come: Deliverance 2 dice minigame (Farkle variant). Turn-based push-your-luck game with human vs AI opponent with strategic risk-based decision making.",
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
