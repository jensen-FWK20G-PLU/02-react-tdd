import { useState } from 'react'

const DropMenu = () => {
	const [menuIsVisible, setMenuIsVisible] = useState(false)

	return (
		<nav>
			<button onClick={() => setMenuIsVisible(!menuIsVisible)}> Menu </button>
			{ menuIsVisible ? (
				<ul>
					<li> Item 1 </li>
					<li> Item 2 </li>
					<li> Item 3 </li>
				</ul>
			) : null }
		</nav>
	)
}

export default DropMenu
