"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MessageSquare } from "lucide-react"

export function ChatFloatingLink() {
  const pathname = usePathname()

  if (pathname?.includes("/assistant")) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link href="/assistant" aria-label="Chat with Moshe's AI assistant">
        <button className="flex items-center gap-2 px-5 py-3 rounded-full shadow-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
          <MessageSquare size={18} />
          Ask my AI
        </button>
      </Link>
    </div>
  )
}
