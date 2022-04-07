import React from "react";
import Cards from "../components/Cards";
import SearchInfo from '../components/SearchInfo';
const Page = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <SearchInfo text={props.searchText} cnt={props.cnt}/>
		    <Cards goods={props.goods}/>
        </div>
    )
}

export default Page;