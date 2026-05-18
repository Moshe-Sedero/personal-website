"use client"

import { motion } from "motion/react"

const stats = [
  { value: "14+", label: "Years of Engineering Experience" },
  { value: "5,000+", label: "ML Training Datasets Delivered" },
  { value: "100+", label: "Satellite Operators Trained" },
  { value: "3", label: "Global Engineering Locations" },
]

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: "easeOut" }}
          className="flex flex-col items-start lg:items-center lg:px-6 lg:border-r lg:border-[var(--border)] last:border-0"
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
