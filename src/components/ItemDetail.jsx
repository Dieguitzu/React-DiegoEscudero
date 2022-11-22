import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({DetailItem}) => {
    const {addProduct} =  useCartContext()

    let [contador, setContador] = useState(1)
    console.log(contador)
    const suma = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    const resta = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const onAdd = () => {
        addProduct(DetailItem, contador)
    }

    return (
            <div className="card divItemDetail m-2">
                <img className="imgProductDetail" src={require(`../app/assets/img/${DetailItem.img}`)} alt="Producto" />
                <div className="card-body ">
                    <h5 className="card-title">{DetailItem.nombre}</h5>
                    <p className="card-text f mb-3">{DetailItem.propiedades}</p>
                    <div className="ItemCount">
                        <p onClick={resta} className=" botonCount pr-4">-</p>
                        <p className=" botonCount">{contador}</p>
                        <p onClick={suma} className="botonCount pl-4">+</p>
                    </div>
                    <p className="card-text mb-3">${DetailItem.precio}</p>
                    <button  className="btn btn-primary" onAdd={onAdd}>Agregar al carrito</button>
                </div>
            </div>
    )
}
}

export default ItemDetail