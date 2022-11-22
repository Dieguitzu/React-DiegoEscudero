import React from 'react'
import {useState} from 'react';


const ItemCount = () => {

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

    return (
        <div>
            <div className="ItemCount">
                <p onClick={resta} className=" botonCount pr-4">-</p>
                <p className=" botonCount">{contador}</p>
                <p onClick={suma} className="botonCount pl-4">+</p>
            </div>
        </div>
    )
}

export default ItemCount