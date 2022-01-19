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
		// .getByText('Value: 1', { exact: false })
		expect(element).toBeInTheDocument()
	})

	it('displays the value 2 when user clicks on +1', () => {
		render( <Calculator /> )
		const button = screen.getByTestId('button-increase')
		userEvent.click(button)

		const element = screen.getByText(/Value: 2/i)
		expect(element).toBeInTheDocument()
	})

	it('displays the value 0 when user clicks on -1', () => {
		render( <Calculator /> )
		const button = screen.getByRole('button', { name: '-1' })
		userEvent.click(button)

		const element = screen.getByText(/Value: 0/i)
		expect(element).toBeInTheDocument()
	})

	it('displays the value -1 when user clicks on -1 twice', () => {
		render( <Calculator /> )
		const button = screen.getByRole('button', { name: '-1' })
		userEvent.click(button)
		userEvent.click(button)

		const element = screen.getByText(/Value: -1/i)
		expect(element).toBeInTheDocument()
	})

	it('displays the value 4 when the user clicks on +1 thrice', () => {
		render( <Calculator /> )
		const button = screen.getByRole('button', { name: '+1' })

		userEvent.click(button)
		userEvent.click(button)
		userEvent.click(button)

		const element = screen.getByText(/Value: 4/i)
		expect(element).toBeInTheDocument()
	})

	// Bonusmaterial: reguljära uttryck
	// /cars*/  - carssssss
	// /cars?/  - car, cars
	// /car./   - card, car", ...
	// /car[ds]/ - card, cars
	// /car[ds]* - car, card, cars, cards, carsssdddssdds
	// ^ - början av sträng
	// $ - slutet av sträng
	// /^car/
	// /car\*/ - car*

	// " citattecken \" som inte bryter strängen "

	it('displays the value 0 when user clicks on Clear', () => {
		render( <Calculator /> )
		const button = screen.getByRole('button', { name: 'Clear' })
		userEvent.click(button)

		const element = screen.getByText(/Value: 0/i)
		expect(element).toBeInTheDocument()
	})
})
