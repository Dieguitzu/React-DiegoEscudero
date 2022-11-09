import React from "react"
import Item from "../components/Item"
import '../style/ItemList.css'


const ItemList = ({data}) =>{
    return(
        <div className='card divProduct d-flex column p-3'>
                {data.map((producto) =>
                    <Item className="card-body d-flex column" key={producto.id}
                    producto={producto}/>)}
        </div>
    )
}

export default ItemList;