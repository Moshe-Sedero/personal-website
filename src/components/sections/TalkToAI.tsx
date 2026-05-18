import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function TalkToAI() {
  return (
    <section id="talk-to-ai" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div
        className="rounded-2xl p-8 sm:p-12 border text-center space-y-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderColor: "color-mix(in srgb, var(--accent) 20%, transparent)",
        }}
      >
        <h2 className="text-2xl font-bold">Talk to My AI</h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            {"I've built an AI assistant trained on my professional background - it can answer questions about my experience, how I've approached complex engineering problems, and what I'm working on now."}
          </p>
          <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
            Ask it anything you would ask me in a first conversation.
          </p>
        </div>
        <Link
          href="/assistant"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          style={{ boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 30%, transparent)" }}
        >
          <MessageSquare size={18} />
          Start a Conversation
        </Link>
      </div>
    </section>
  )
}
