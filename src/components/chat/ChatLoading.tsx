export function ChatLoading() {
  return (
    <div className="flex justify-start">
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-lg px-4 py-3">
        <div className="flex gap-1 items-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[var(--muted)] animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
