import { FormEvent } from "react"
import { Send } from "lucide-react"

interface ChatInputProps {
  input: string
  onChange: (value: string) => void
  onSubmit: (e: FormEvent) => void
  isLoading: boolean
}

export function ChatInput({
  input,
  onChange,
  onSubmit,
  isLoading,
}: ChatInputProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="border-t border-[var(--border)] px-4 py-4 flex gap-3 items-center"
    >
      <input
        value={input}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about Moshe's experience..."
        maxLength={500}
        disabled={isLoading}
        className="flex-1 bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-2.5 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="p-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <Send size={16} />
      </button>
    </form>
  )
}
