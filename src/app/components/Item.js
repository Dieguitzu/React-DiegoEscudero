import React, {useState} from "react";
import ItemList from "./ItemList";

const Item = ({data}) => {
    console.log(data)
    return(
        <div>
            <p>{data && data.nombre}</p>
        </div>
    )
}

export default Item;