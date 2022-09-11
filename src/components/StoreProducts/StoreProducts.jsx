import React from "react";
import Product from "../Product/Product";
import products from "../../data/store/products";
import styles from "./storeProducts.module.scss";

const { storeProductsContainer, storeProduct } = styles;

const productsByCategory = {
  shoes: products,
  lowers: products,
  uppers: products,
  hijabs: products,
  accessories: products,
  store: products,
};

const StoreProducts = ({ category = "store", products }) => {
  return (
    <div className={storeProductsContainer}>
      {products.map((product) => {
        return (
          <Product
            key={product.product_id}
            className={storeProduct}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default StoreProducts;
