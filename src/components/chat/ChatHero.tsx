const SUGGESTED_PROMPTS = [
  "What's Moshe's experience in AV/ADAS?",
  "What cloud projects has he led?",
  "Tell me about his Gen AI background",
  "How can I contact Moshe?",
]

interface ChatHeroProps {
  onPromptClick: (prompt: string) => void
}

export function ChatHero({ onPromptClick }: ChatHeroProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center space-y-8 px-4">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Ask me anything about Moshe
        </h1>
        <p className="text-[var(--muted)] text-sm max-w-md">
          I&apos;m Moshe&apos;s AI assistant. I can answer questions about his
          background, experience, and skills.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onPromptClick(prompt)}
            className="text-left text-sm px-4 py-3 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
