import React, { useState } from "react";
import { products } from "../../products";
import Product from "./product/Product";
import classes from "./Home.module.css";
import { useCart } from "../../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <div className={classes.product_list}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
