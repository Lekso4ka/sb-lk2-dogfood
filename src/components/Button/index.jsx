import React from "react";
import "./style.css";

const Button = ({type, text}) => {
    return (
        <button className={type ? "btn " + type : "btn"}>{text}</button>
    )
    // <div class="redblockprettyleft"></div>
}

export default Button;