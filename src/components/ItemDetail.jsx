import {useState} from 'react';
import { useCartContext } from '../context/CartContext';
import { useContext } from 'react'; 


const ItemDetail = ({DetailItem}) => {
    //const {addProduct} =  useCartContext()

    console.log(DetailItem)
    //const onAdd = () => {
    //    addProduct(DetailItem, contador)
    //}

    return (
            <div className="card divItemDetail m-2">
                <img className="imgProductDetail" src={require(`../app/assets/img/${DetailItem.img}`)} alt="Producto" />
                <div className="card-body ">
                    <h5 className="card-title">{DetailItem.nombre}</h5>
                    <p className="card-text f mb-3">{DetailItem.propiedades}</p>

                    <p className="card-text mb-3">${DetailItem.precio}</p>

                </div>
            </div>
    )
}

export default ItemDetail