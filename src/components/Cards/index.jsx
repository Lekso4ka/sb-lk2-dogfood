import React from "react";
import Card from "../Card/Card.js";


const Cards = ({goods}) => {
    return (
        <div className="container">
            {goods.map(el => <Card {...el} key={el.id}/>)}
        </div>
    )
}

export default Cards;