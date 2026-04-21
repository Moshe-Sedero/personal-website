import { describe, it, expect } from 'vitest'
import { buildSystemPrompt } from '../system-prompt'

describe('buildSystemPrompt', () => {
  it('returns a non-empty string', () => {
    const prompt = buildSystemPrompt()
    expect(typeof prompt).toBe('string')
    expect(prompt.length).toBeGreaterThan(100)
  })

  it('includes the persona instruction', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain("Moshe's professional assistant")
  })

  it('includes contact email', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('sedero.moshe@gmail.com')
  })

  it('includes GM experience', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('General Motors')
  })

  it('includes IAI experience', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('Israel Aerospace Industries')
  })

  it('includes skills', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('Agile')
    expect(prompt).toContain('Claude Code')
  })

  it('includes guardrail instructions', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('Only discuss')
    expect(prompt).toContain('third person')
  })

  it('includes prompt injection resistance', () => {
    const prompt = buildSystemPrompt()
    expect(prompt.toLowerCase()).toContain('ignore')
  })

  it('includes personal projects', () => {
    const prompt = buildSystemPrompt()
    expect(prompt).toContain('KCD2 Dice Game')
    expect(prompt).toContain('Claude Code')
  })
})
