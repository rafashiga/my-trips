import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the mark in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrópolis',
        slug: 'petropolis',
        location: {
          latitude: 0,
          longitute: 0
        }
      },
      {
        id: '2',
        name: 'São Paulo',
        slug: 'sao paulo',
        location: {
          latitude: 100,
          longitute: 50
        }
      }
    ]
    render(<Map places={places} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
  })
})
