import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import classes from "./Cart.module.css";
import CartItem from "../../components/navbar/cart/CartItem";
import axios from "axios";

const Cart = () => {
  const { cartItems } = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
    setCartTotal(total);
  }, [cartItems]);


  return (
    <div className={classes.cart_list}>
      {cartItems.length > 0 ? (
        <>
          <p className={classes.shopping_cart_title}>Shopping Cart</p>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </>
      ) : (
        <p className={classes.shopping_cart_title}>Your cart is empty.</p>
      )}
      <div className={classes.cart_total}>Cart Total: ${cartTotal}</div>
    </div>
  );
};

export default Cart;
