import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import classes from "./Home.module.css";
import { useCart } from "../../context/CartContext";
import axios from "axios";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://656c6204e1e03bfd572e3dbb.mockapi.io/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <div className={classes.header}>
        <p className={classes.header_title}>Apple Store</p>
      </div>

      <div className={classes.search}>
        <input type="text" placeholder="Search..."></input>
        <button>Find</button>
      </div>
      
      <div className={classes.product_list}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
