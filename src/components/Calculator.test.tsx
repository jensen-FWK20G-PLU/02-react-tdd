import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'

describe('Calculator component', () => {

	it('renders without crashing', () => {
		render( <Calculator /> )
	})

	it('displays the value 1 initially', () => {
		render( <Calculator /> )
		const element = screen.getByText(/Value: 1/i)
		expect(element).toBeInTheDocument()
	})

	it('displays the value 2 when user clicks on +1', () => {
		render( <Calculator /> )
		const button = screen.getByTestId('button-increase')
		userEvent.click(button)

		const element = screen.getByText(/Value: 2/i)
		expect(element).toBeInTheDocument()
	})
	// displays the value 0 when user clicks on -1
	// displays the value 0 when user clicks on Clear
})
