import React, {useState} from "react";
import Products from "../services/products";

const Item = ({data}) => {
    console.log(data)
    return(
        <div>
            <p>{data && data.nombre}</p>
        </div>
    )
}

export default Item;