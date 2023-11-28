import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {

  const {cartItems} = useCart();

  return (
    <div>
     {cartItems.map((item) => (
      <h5>{item.id} {item.name} {item.price}</h5>
     ))}
    </div>
  );
};

export default Cart;
