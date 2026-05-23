"use client"

import { motion } from "motion/react"

const stats = [
  { value: "14+", label: "Years of Engineering Experience" },
  { value: "5,000+", label: "ML Training Datasets Delivered" },
  { value: "20+", label: "Global Workshops Led" },
  { value: "6+", label: "Active Projects Delivered" },
  { value: "100%", label: "Satellite Mission Success" },
  { value: "5", label: "Team Members Led" },
]

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <span
            className="text-4xl lg:text-5xl font-extrabold leading-none"
            style={{ color: "var(--accent)" }}
          >
            {stat.value}
          </span>
          <span className="text-xs text-[var(--muted)] uppercase tracking-widest mt-1 leading-tight">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
