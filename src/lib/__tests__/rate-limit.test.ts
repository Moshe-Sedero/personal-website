import { describe, it, expect, beforeEach, vi } from 'vitest'
import { isRateLimited, clearRateLimitCache } from '../rate-limit'

describe('isRateLimited', () => {
  beforeEach(() => {
    clearRateLimitCache()
    vi.useFakeTimers()
  })

  it('allows the first request', () => {
    expect(isRateLimited('1.2.3.4')).toBe(false)
  })

  it('allows up to 20 requests', () => {
    for (let i = 0; i < 20; i++) {
      expect(isRateLimited('1.2.3.4')).toBe(false)
    }
  })

  it('blocks the 21st request', () => {
    for (let i = 0; i < 20; i++) {
      isRateLimited('1.2.3.4')
    }
    expect(isRateLimited('1.2.3.4')).toBe(true)
  })

  it('does not block different IPs', () => {
    for (let i = 0; i < 20; i++) {
      isRateLimited('1.2.3.4')
    }
    expect(isRateLimited('5.6.7.8')).toBe(false)
  })

  it('resets after 1 hour', () => {
    for (let i = 0; i < 20; i++) {
      isRateLimited('1.2.3.4')
    }
    vi.advanceTimersByTime(60 * 60 * 1000 + 1)
    expect(isRateLimited('1.2.3.4')).toBe(false)
  })
})
