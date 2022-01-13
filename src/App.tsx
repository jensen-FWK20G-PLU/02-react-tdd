import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import DropMenu from './components/DropMenu'
import Dinopedia from './components/dinosaur/Dinopedia';

function App() {
	return (
		<div className="App">
			<header>
				<DropMenu />
			</header>
			<Calculator />
			<Dinopedia />
		</div>
	);
}

export default App;
