import React from "react";
import Product from "../Product/Product";
import products from "../../data/store/products";
import styles from "./storeProducts.module.scss";

const { storeProductsContainer, storeProduct } = styles;

const StoreProducts = () => {
  return (
    <div className={storeProductsContainer}>
      {products.map((product) => {
        return <Product className={storeProduct} product={product} />;
      })}
    </div>
  );
};

export default StoreProducts;
