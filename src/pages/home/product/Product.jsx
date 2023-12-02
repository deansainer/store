import React, { useState } from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const { id, name, price, image } = props.product;
  const [amount, setAmount] = useState(1)
  
  function handleAmount(e) {
    setAmount(e.target.value)
  }
  
  return (
    <div className={classes.product_card}>
      <img alt={image} className={classes.product_icon} src={image}></img>
      <span>{name}</span>
      <span>${price}</span>
      <div className={classes.amount_and_add}>
      <input onChange={handleAmount} value={amount} className={classes.amount_input} type="text"></input>
      <button onClick={() => props.addToCart(props.product, amount)} className={classes.cart_btn}>+</button>
      </div>
    </div>
  );
};

export default Product;