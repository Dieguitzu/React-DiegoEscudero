import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../style/CartItem.css'
import Button from 'react-bootstrap/Button';

const CartItem = ({producto}) => {

    const {removeProduct} = useCartContext()

    return (
            <div className='divProd'>
                <li className='liItemCI'>
                    <ul className='ulTableCI'>{producto.nombre}</ul>
                <ul className='ulTableCI'>{producto.cantidad}</ul>
                <ul className='ulTableCI'>{producto.precio}</ul>
                <ul className='ulTableCI'>{producto.precio*producto.cantidad}</ul>
                
            </li>
                <Button onClick={() => removeProduct(producto.id)} className="danger" variant="danger">X</Button>{' '}
            </div>

    )
}

export default CartItem