import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ DetailItem }) => {
    const {addProduct} =  useCartContext()

    console.log(DetailItem);

    return (
        <div className='card divItemDetail m-2'>
            <img
            className='imgProduct '
            src={`/img/${DetailItem.img}`}
            alt='Producto'
            />      
            <div className='card-body '>
                <h5 className='card-title'>{DetailItem.nombre}</h5>
                <p className='card-text f mb-3'>{DetailItem.propiedades}</p>
                <ItemCount />
                <p className='card-text mb-3'>${DetailItem.precio}</p>
                <button onAdd={addProduct(DetailItem)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;