import React from "react";
import relatedProducts from "../../data/store/relatedProducts";
import Product from "../Product/Product";

import styles from "./relatedProducts.module.scss";

const {
  relatedProductsContainer,
  relatedProductsTitle,
  relatedProductsList,
  relatedProduct,
} = styles;

const RelatedProducts = () => {
  return (
    <div className={relatedProductsContainer}>
      <h5 className={relatedProductsTitle}>you might also like:</h5>
      <div className={relatedProductsList}>
        {relatedProducts.map((product) => {
          return <Product className={relatedProduct} product={product} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
