import React from 'react'
import {useState} from 'react';


const ItemCount = ({onAdd}) => {

    const [contador, setContador] = useState(1)
    const suma = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    }
    const resta = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    const cantidad = contador;

    return (
        <div>
            <div className="ItemCount">
                <p onClick={resta} className=" botonCount pr-4">-</p>
                <p className=" botonCount">{cantidad}</p>
                <p onClick={suma} className="botonCount pl-4">+</p>
            </div>
            <button className="btn" onClick={()=>onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount