import { render } from '@testing-library/react'
import DropMenu from './DropMenu'

// Dropdown menu - en meny som expanderar när man klickar på den


describe('Dropdown menu component', () => {

	it('renders without crashing', () => {
		render( <DropMenu /> )
	})
	
	// menu button exists
	// menu items do not show initially
	// menu items do show when the user clicks the menu button
	// menu items do not show when the user clicks the menu button again

})
