import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import DropMenu from './components/DropMenu'

function App() {
	return (
		<div className="App">
			<header>
				<DropMenu />
			</header>
			<Calculator />
		</div>
	);
}

export default App;
