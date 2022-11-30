import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';

const ItemDetail = ({ DetailItem }) => {
    const {addProduct} =  useCartContext()

    console.log(DetailItem);

    return (
        <div className='card divItemDetail m-2'>
            <img
            className='imgProductDetail '
            src={`${DetailItem.img}`}
            alt='Producto'
            />      
            <div className='card-body itemDetailContainer'>
                <h5 className='card-title'>{DetailItem.nombre}</h5>
                <p className='card-text f mb-3'>{DetailItem.propiedades}</p>
                <ItemCount />
                <p className='card-text mb-3'>${DetailItem.precio}</p>
                <button className="btn" onAdd={addProduct(DetailItem)}><Link to={`${process.env.PUBLIC_URL}/cart`}>Agregar al carrito</Link></button>
            </div>
        </div>
    );
};

export default ItemDetail;