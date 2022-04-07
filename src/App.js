import React, {useState, useEffect} from 'react';
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer";
import api from "./Api.js";

import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import {Routes, Route} from "react-router-dom";


function App () {
	const [searchText, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [goods, setGoods] = useState(data);
	const [cnt, setSearchCnt] = useState(0);

	const search = val => {
		console.log("App", val);
		setSearch(val);
		const newCards = data.filter(el => el.name.toLowerCase().includes(val.toLowerCase()));
		setGoods(newCards);
		setSearchCnt(newCards.length);
	}

	useEffect(() => {
		api.getProductList().then(ans => {
			console.log(ans[0]);
			setData(ans);
			setGoods(ans);
		});
	}, []);

	return <>
		<Header searchText={searchText} appHandler={search}/>
		<main>
			<Routes>
				<Route path="/cart" element={
					<Cart name="Корзина"/>
				}/>
				<Route path="/catalog" element={
					<Catalog name="Каталог" searchText={searchText} cnt={cnt} goods={goods}/>
				}/>
				<Route path="/contacts" element={
					<Contacts name="Контакты"/>
				}/>
				<Route path="/favorites" element={
					<Favorites name="Избранное"/>
				}/>
				<Route path="/" element={
					<Main name="Главная"/>
				}/>
				<Route path="/product" element={
					<Product name="Товар"/>
				}/>
				<Route path="/profile" element={
					<Profile name="Личный кабинет"/>
				}/>
			</Routes>
		</main>
		<Footer/>
	</>
}

export default App;
