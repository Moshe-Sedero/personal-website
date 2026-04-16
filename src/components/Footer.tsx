import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8 mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>Built with Next.js · Vercel AI SDK · Groq</p>
        <Link
          href="https://github.com/Moshe-Sedero/personal-website"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--foreground)] transition-colors"
        >
          View source on GitHub ↗
        </Link>
      </div>
    </footer>
  )
}
