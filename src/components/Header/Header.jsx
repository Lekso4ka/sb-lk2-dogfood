import React from "react";
import Logo from "../Logo";
import Search from "../Search";
// SPA - Single Page Application - одностраничное приложение
import {Link} from "react-router-dom";

const Header = function({searchText, appHandler}) {
    const searchHandler = inpVal => {
        console.log("header", inpVal);
        appHandler(inpVal);
    }
    return (
        <header>
            <div className="container">
                <Logo />
				<Search searchText={searchText} searchHandler={searchHandler}/>
                <nav style={{display: "flex", gap: "10px"}}>
                    <Link to="/favorites">Избранное</Link>
                    <Link to="/cart">Корзина</Link>
                    <Link to="/profile">Профиль</Link>
                    <a href="" onClick={e => e.preventDefault()}>SignIn</a>
                    <a href="" onClick={e => e.preventDefault()}>SignUp</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
