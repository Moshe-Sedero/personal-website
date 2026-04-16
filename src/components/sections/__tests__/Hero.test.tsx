import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Hero } from '../Hero'

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

describe('Hero', () => {
  it('renders name and title from profile data', () => {
    render(<Hero />)
    expect(screen.getByText('Moshe Sedero')).toBeInTheDocument()
    expect(screen.getByText('Technical Project Manager')).toBeInTheDocument()
  })

  it('renders Download CV link', () => {
    render(<Hero />)
    expect(screen.getByText(/download cv/i)).toBeInTheDocument()
  })

  it('renders Chat CTA', () => {
    render(<Hero />)
    expect(screen.getByText(/chat with my ai/i)).toBeInTheDocument()
  })
})
