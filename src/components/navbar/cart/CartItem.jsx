import React from "react";
import classes from "./CartItem.module.css";
import { useCart } from "../../../context/Context";

const CartItem = (props) => {
  const { id, name, price, image, amount } = props.cartItem;
  const { deleteFromCart } = useCart();

  return (
    <div className={classes.cart}>
      <img className={classes.cart_image} src={image} alt={image}></img>
      <div className={classes.cart_data}>
        <h5>{name}</h5>
        <p>${price}</p>
        <p>Amount: {amount}</p>
      </div>
      <button onClick={() => deleteFromCart(id)} className={classes.cart_btn}>
        -
      </button>
    </div>
  );
};

export default CartItem;
