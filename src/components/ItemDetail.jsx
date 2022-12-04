import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { useState } from "react";

const ItemDetail = ({ DetailItem }) => {

    const [compra, setCompra] = useState(false)

    const {addProduct} =  useCartContext()

const onAdd = (cantidad)=>{
    
    addProduct(DetailItem,cantidad)
    setCompra(true)

}

    return (
        <div className='card divItemDetail m-2'>
            <img
            className='imgProductDetail'
            src={`${DetailItem.img}`}
            alt='Producto'
            />      
            <div className='card-body itemDetailContainer'>
                <h5 className='card-title'>{DetailItem.nombre}</h5>
                <p className='card-text mb-3'>{DetailItem.propiedades}</p>
                <p className='card-text mb-3'>${DetailItem.precio}</p>
                {compra ? <Link to={`${process.env.PUBLIC_URL}/cart`} className="btn">Ir al carrito</Link>
                : <ItemCount onAdd={onAdd}/>}
            </div>
        </div>
    );
};

export default ItemDetail;