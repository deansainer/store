import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product, amount) {
    const updatedProduct = {...product, amount}
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    console.log(updatedProduct)
  };

  function deleteFromCart(itemId) {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
};
