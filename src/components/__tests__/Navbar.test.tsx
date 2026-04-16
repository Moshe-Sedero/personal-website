import { render, screen } from '@testing-library/react'
import { Navbar } from '../Navbar'

describe('Navbar', () => {
  it('renders the name', () => {
    render(<Navbar />)
    expect(screen.getByText('Moshe Sedero')).toBeInTheDocument()
  })

  it('renders Chat nav link', () => {
    render(<Navbar />)
    expect(screen.getByText(/chat/i)).toBeInTheDocument()
  })
})
