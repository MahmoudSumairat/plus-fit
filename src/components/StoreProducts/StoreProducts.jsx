import React from "react";
import Product from "../Product/Product";
import products from "../../data/store/products";
import styles from "./storeProducts.module.scss";

const { storeProductsContainer, storeProduct } = styles;

const productsByCategory = {
  shoes: products,
  shorts: products,
  shirts: products,
  hijabs: products,
  accessories: products,
  store: products,
};

const StoreProducts = ({ category = "store" }) => {
  return (
    <div className={storeProductsContainer}>
      {productsByCategory[category].map((product) => {
        return <Product className={storeProduct} product={product} />;
      })}
    </div>
  );
};

export default StoreProducts;
