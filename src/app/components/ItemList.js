import React from "react"
import Item from "../components/Item"
import ItemListConteiner from "./ItemListConteiner"


const ItemList = (products) =>{
    return(
        <div>
            {products.map((res) =>(
                <Item data={res}/>
            ))}
        </div>
    )
}

export default ItemList;