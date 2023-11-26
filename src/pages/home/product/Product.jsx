import React from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const { id, name, price, image } = props.product;
  return (
      <div className={classes.product_card}>
        <img alt={image} className={classes.product_icon} src={image}></img>
        <span>{name}</span>
        <span>${price}</span>
        <button className={`${classes.add_to_cart_btn} btn btn-primary`}>Add to cart</button>
      </div>
  );
};

export default Product;
