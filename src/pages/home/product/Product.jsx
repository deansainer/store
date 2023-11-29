import React from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const { id, name, price, image } = props.product;


  return (
    <div className={classes.product_card}>
      <img alt={image} className={classes.product_icon} src={image}></img>
      <span>{name}</span>
      <span>${price}</span>
      <button onClick={() => props.addToCart(props.product)} className={classes.cart_btn}>+</button>
    </div>
  );
};

export default Product;