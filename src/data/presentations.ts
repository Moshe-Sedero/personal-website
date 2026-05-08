export interface Presentation {
  title: string
  description: string
  audience: string
  topics: string[]
  pdfPath?: string
  slidesUrl?: string
  date?: string
}

export const presentations: Presentation[] = [
  {
    title: "Satellites & Space Systems",
    description: "Overview of satellite technology, orbital mechanics, and real-world space systems - from communication satellites to Earth observation missions.",
    audience: "General Audience",
    topics: ["Satellites", "Space Systems", "Orbital Mechanics", "Israel Aerospace Industries"],
    pdfPath: "/Satellites.pdf",
    date: "2024",
  },
]
