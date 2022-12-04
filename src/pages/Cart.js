import React from 'react'
import { Link } from 'react-router-dom'
import { createPedido } from '../app/api'
import CartItem from '../components/CartItem'
import Formulario from '../components/Formulario'
import { useCartContext } from '../context/CartContext'
import '../style/Cart.css'

const Cart = () => {

    const { cart, removeProduct, clearCart} =  useCartContext();
    const total = cart.map(item => item.precio*item.cantidad).reduce((prev,curr) => prev + curr, 0);
    const terminarCompra = (data) => {
        const pedidoFinal = cart.map((producto) => ({nombre: producto.nombre, precio: producto.precio*producto.cantidad, cantidad: producto.cantidad }));

        let cliente = data;
        let hoy = new Date();
        let fecha = hoy.toLocaleString();
        createPedido({pedidoFinal, cliente,total,fecha});
        if(cliente.nombre !== "" && cliente.telefono === "" && cliente.mail !== ""){
            alert("Completa sus datos para continuar")
        }else{
            alert("Gracias por su compra")
        }
    }
    

    return (
        <div>
            <h2 className='h2'>Carrito</h2>
            <div className='divTabla'>

                <li className='liTable'>
                    <ul className='ulTable'>Nombre</ul>
                    <ul className='ulTable'>Cantidad</ul>
                    <ul className='ulTable'>Precio</ul>
                    <ul className='ulTable'>Total</ul>
                </li>

            {
                cart.length !==  0?
                <div className='divProdCart'>{
                    cart.map((producto) => 
                    <CartItem
                    producto= {producto}
                    key={producto.id}
                    />
                    )}
                    <div>
                        <button className='btn' onClick={() => removeProduct(cart.id)} ></button>
                    </div>
                    <div className='divCierre'>
                        <button onClick={() => clearCart()} className="btn btn-eliminar">
                            <p>Quitar todo</p>
                        </button>
                        <p className='total'>Total:  ${total}</p>
                    </div>
                    <Formulario addOrder={ data => terminarCompra(data)} />
                </div>
                : <div className='divBtn'><Link to={process.env.PUBLIC_URL + "/"} className=" btn btnRet">Volver a productos</Link></div>
            }</div>
        </div>




    ) 
        }

export default Cart