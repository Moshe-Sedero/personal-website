import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moshe Sedero - Technical Project Manager",
  description:
    "Technical Project Manager with 14 years of experience across Automotive R&D and Space domains. Delivering complex technical projects end-to-end, from PoC to production.",
  openGraph: {
    title: "Moshe Sedero - Technical Project Manager",
    description:
      "Technical Project Manager with 14 years of experience across Automotive R&D and Space domains.",
    type: "website",
    url: "https://moshesedero.vercel.app",
  },
  twitter: {
    card: "summary",
    title: "Moshe Sedero - Technical Project Manager",
    description: "Technical Project Manager - AV/ADAS, Cloud, AI",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
