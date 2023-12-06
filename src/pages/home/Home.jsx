import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import classes from "./Home.module.css";
import { useCart } from "../../context/CartContext";
import axios from "axios";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch("https://656c6204e1e03bfd572e3dbb.mockapi.io/api/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  
  function search(event) {
    setSearchValue(event.target.value) // handling search value
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    setProducts(filteredProducts)
    console.log(searchValue);
  }


  return (
    <div>
      <div className={classes.header}>
        <p className={classes.header_title}>Apple Store</p>
      </div>

      <div className={classes.search}>
        <input type="text" onChange={search} value={searchValue} placeholder="Search..."></input>
        <img onClick={() => setSearchValue('')} src="https://cdn-icons-png.flaticon.com/128/3667/3667999.png" className={classes.clear_btn}></img>
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
