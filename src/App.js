import React from 'react';
import Card from "./components/Card/Card.js";

function App () {
	const pets = ["Dog", "Cat", "Bird", "Hamster", "Horse", "Racoon"];
	const content = pets.map(pet => <Card pet={pet}/>);
	return <>
		<h1>React is happy!</h1>
		<div className="container">
			{content}
		</div>
	</>
}

export default App;
