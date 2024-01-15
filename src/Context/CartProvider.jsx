import React, { useState } from 'react'
import CartContext from './CartContext';

const CartProvider = ({children}) => {
    const [cartItems,setCartItems] = useState([]);

    // Handle Add To Cart
    const addToCart = (item,qty) => {
      const isExist = cartItems.find((cart) => cart.id===item.id)
      if(isExist){
        setCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem))
      }else {
        setCartItems((prev) => [...prev,item])
      }
    }

    // Handle Remove From Cart
    const removeFromCart = (id) => {
      const cart = cartItems.filter((c) => c.id !==id);
      setCartItems(cart)
    }

  return (
    <CartContext.Provider value={{cartItems , addToCart , removeFromCart , cartItemsLength:cartItems.length,}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
