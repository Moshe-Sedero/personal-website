interface RateLimitEntry {
  count: number
  resetAt: number
}

const cache = new Map<string, RateLimitEntry>()

const MAX_REQUESTS = 20
const WINDOW_MS = 60 * 60 * 1000 // 1 hour

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = cache.get(ip)

  if (!entry || now > entry.resetAt) {
    cache.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS) {
    return true
  }

  entry.count++
  return false
}

// Exported for test cleanup only
export function clearRateLimitCache(): void {
  cache.clear()
}
