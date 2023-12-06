import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./product/Product";
import classes from "./Home.module.css";
import { useCart } from "../../context/CartContext";
import axios from "axios";

const Home = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://656c6204e1e03bfd572e3dbb.mockapi.io/api/products")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error(`Error fetching products: ${error}`));
  }, []);

  function handleSearchValue(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <div className={classes.header}>
        <p className={classes.header_title}>Apple Store</p>
      </div>

      <div className={classes.search}>
        <input
          className={classes.search_input}
          type="text"
          onChange={handleSearchValue}
          value={searchValue}
          placeholder="Search..."
        ></input>
      </div>

      <div className={classes.product_list}>
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
          )
          .map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
      </div>
    </div>
  );
};

export default Home;
