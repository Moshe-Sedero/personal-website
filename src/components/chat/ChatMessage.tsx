import ReactMarkdown from "react-markdown"
import type { UIMessage } from "ai"

interface ChatMessageProps {
  message: UIMessage
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  // Extract text content from UIMessage parts
  const text = message.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-[var(--accent)] text-white"
            : "bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]"
        }`}
      >
        {isUser ? (
          <p>{text}</p>
        ) : (
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <p className="mb-3 last:mb-0 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="my-2 space-y-1.5 list-none">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-2 space-y-1.5 list-none">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="flex gap-2 leading-relaxed">
                  <span
                    className="flex-shrink-0 mt-0.5 select-none"
                    style={{ color: "var(--accent-50)" }}
                  >
                    ▸
                  </span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[var(--foreground)]">{children}</strong>
              ),
              h3: ({ children }) => (
                <h3 className="font-semibold text-[var(--foreground)] mt-3 mb-1">{children}</h3>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  )
}
