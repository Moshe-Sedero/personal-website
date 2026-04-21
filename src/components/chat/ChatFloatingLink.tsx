"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MessageSquare } from "lucide-react"

export function ChatFloatingLink() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>
    let hideTimer: ReturnType<typeof setTimeout>

    const cycle = () => {
      showTimer = setTimeout(() => {
        setIsVisible(true)
        hideTimer = setTimeout(() => {
          setIsVisible(false)
          cycle()
        }, 10_000) // visible for 10s
      }, 8_000) // hidden for 8s
    }

    cycle()
    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (pathname?.includes("/assistant")) return null

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/assistant" aria-label="Chat with Moshe's AI assistant">
        <button className="group flex items-center gap-2 p-4 rounded-full shadow-lg bg-[var(--accent)] text-white hover:opacity-90 transition-colors">
          <MessageSquare size={20} />
          <span className="text-sm font-medium pr-1 hidden group-hover:inline-block">
            Ask my AI
          </span>
        </button>
      </Link>
    </div>
  )
}
