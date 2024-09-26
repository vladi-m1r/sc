// Import necessary modules and components
import { render, screen } from "@testing-library/react"
import IndexPage from "@/app/(marketing)/page"

describe("IndexPage", () => {
  it('should contain the text "Scarab"', () => {
    render(<IndexPage />) // ARRANGE

    const myElem = screen.getByText(/Scarab/) // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })

  it('should contain the text "tracking"', () => {
    render(<IndexPage />) // ARRANGE

    const myElem = screen.getByText(/tracking/i) // ACT

    expect(myElem).toBeInTheDocument() // ASSERT
  })
})
