import React, { useState, useContext } from 'react'

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ;
  
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

const addProduct = (item, newQuantity) => {
  const pedido = {...item, cantidad:newQuantity }

  if(isInCart(item.id)){
    console.log(item.id)
  const carritoActualizado = cart.map((prod)=>{
    if(prod.id === item.id){
      console.log(prod.id)
      return {...prod, cantidad:prod.cantidad + newQuantity}
    }else{
        return prod;
    }
})
  setCart(carritoActualizado)
  }else{
    
  setCart([...cart, {...item, cantidad:newQuantity}])

  }

}

  return (
      <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct,cart }}>
        {children}
      </CartContext.Provider>
  ) 
}

export default CartProvider