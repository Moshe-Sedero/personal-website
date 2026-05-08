export interface Presentation {
  title: string
  description: string
  audience: string
  topics: string[]
  pdfPath?: string
  slidesUrl?: string
  thumbnailPath?: string
  date?: string
}

export const presentations: Presentation[] = [
  {
    title: "ADAS & Autonomous Vehicles",
    description: "Educational presentation delivered to high school students covering the fundamentals of Advanced Driver Assistance Systems, sensor fusion, and the road to full vehicle autonomy.",
    audience: "High School Students",
    topics: ["ADAS", "LiDAR", "Computer Vision", "Safety", "Autonomous Vehicles"],
    pdfPath: "/adas-highschool.pdf",
    thumbnailPath: "/adas-highschool-card-thumbnail.png",
    date: "2026",
  },
  {
    title: "Satellites & Space Systems",
    description: "Overview of satellite technology, orbital mechanics, and real-world space systems - from communication satellites to Earth observation missions.",
    audience: "General Audience",
    topics: ["Satellites", "Space Systems", "Orbital Mechanics", "Israel Aerospace Industries"],
    pdfPath: "/satellites.pdf",
    date: "2026",
  },
]
