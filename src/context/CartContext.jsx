import React, { useState } from 'react'

const CartContext = React.createContext('');

export const useCartContext = () => useCartContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find (product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

const addProduct = (item, newQuantity) => {
  console.log(item, newQuantity)
  // const newCart = cart.filter(prod =>prod.id !== item.id)
  // newCart.push({...item, quantity : newQuantity});
  // setCart(newCart)

}

  return (
      <CartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct }}>
        {children}
      </CartContext.Provider>
  )
}

export default CartProvider