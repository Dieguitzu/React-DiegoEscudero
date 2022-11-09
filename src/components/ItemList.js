import React from "react"
import Item from "../components/Item"
import '../style/ItemList.css'


const ItemList = ({data}) =>{
    return(
        <div className='divItemList d-flex column p-1'>
                {data.map((producto) =>
                    <Item key={producto.id}
                    producto={producto}/>)}
        </div>
    )
}

export default ItemList;