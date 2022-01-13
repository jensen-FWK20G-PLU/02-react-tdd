import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DropMenu from './DropMenu'

// Dropdown menu - en meny som expanderar när man klickar på den


describe('Dropdown menu component', () => {

	it('renders without crashing', () => {
		render( <DropMenu /> )
	})

	it('menu button exists', () => {
		render( <DropMenu /> )
		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument()
	})

	it('menu items do not show initially', () => {
		render( <DropMenu /> )
		const items = screen.queryAllByRole('listitem')
		const firstItem = items[0]
		
		// We expect that items is an empty array
		expect(firstItem).toBeUndefined()
		
		// Två sätt att göra saker osynliga i React:
		// 1. display: none
		// 2. inte rendera elementet (det finns inte)
		// Vi väljer: bara rendera menu items när de ska vara synliga
	})

	test('menu items do show when the user clicks the menu button', () => {
		render( <DropMenu /> )
		const button = screen.getByRole('button')
		// console.log('Menu button:', button);

		userEvent.click(button)

		const items = screen.queryAllByRole('listitem')
		expect(items.length).toBeGreaterThan(0)
	})

	test('menu items do not show when the user clicks the menu button again', () => {
		render( <DropMenu /> )
		const button = screen.getByRole('button')

		userEvent.click(button)
		userEvent.click(button)

		const items = screen.queryAllByRole('listitem')
		expect(items.length).toBe(0)
	})

})
