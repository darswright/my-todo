import React from 'react';
import TodoContainer from './TodoContainer';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
	return (
		<div>
			<Header />
			<TodoContainer />
			<Footer />
		</div>
	);
}

export default App;
