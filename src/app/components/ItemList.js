import React from "react"
import Item from "../components/Item"


const ItemList = (products) =>{
    return(
        <div>
            {products.map((product) =>(
                <Item data={product}/>
            ))}
        </div>
    )
}

export default ItemList;