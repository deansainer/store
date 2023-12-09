import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://656c6204e1e03bfd572e3dbb.mockapi.io/api/cartItems")
      .then((res) => setCartItems(res.data));
  }, []);

  function addToCart(product, amount) {
    const updatedProduct = { ...product, amount };
    setCartItems((prevCartItems) => [...prevCartItems, updatedProduct]);
    axios.post(
      "https://656c6204e1e03bfd572e3dbb.mockapi.io/api/cartItems",
      updatedProduct
    );
  }

  function deleteFromCart(itemId) {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
    axios.delete(`https://656c6204e1e03bfd572e3dbb.mockapi.io/api/cartItems/${itemId}`)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  return useContext(CartContext);
}
