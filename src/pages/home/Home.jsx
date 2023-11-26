import React from "react";
import { products } from "../../products";
import Product from "./product/Product";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.product_list}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
