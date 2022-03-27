import React from "react";
import Logo from "../Logo";
const Header = function() {
    return (
        <header>
            <div className="container">
                <Logo />
                <nav>
                    <a href="">pic 1</a>
                    <a href="">pic 2</a>
                    <a href="">pic 3</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;