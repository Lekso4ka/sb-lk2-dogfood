import React, {useState} from 'react';
import Header from './components/Header/Header.jsx';
import Cards from "./components/Cards";
import Footer from "./components/Footer";
// import Test from "./components/Test";
import data from "./data.json";

function App () {
	const [searchText, setSearch] = useState("");
	const [goods, setGoods] = useState(data);

	const search = val => {
		console.log("App", val);
		setSearch(val);
		const newCards = data.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
		setGoods(newCards);
	}
	
	// let st = {
	// 	textAlign: "center",
	// 	backgroundColor: "forestgreen",
	// 	padding: "20px"
	// }
	return <>
		<Header searchText={searchText} appHandler={search}/>
		{/* <div style={st}><Test/></div> */}
		{/*<div style={{backgroundColor: "lightcyan", padding: "10px"}}/>*/}
		<Cards goods={goods}/>
		<Footer/>
	</>
}

export default App;
