import React from "react";
import calculatePrice from "../../../helpers/calculatePrice";
import styles from "./productNamePrice.module.scss";

const {
  productNamePriceContainer,
  productName,
  productPrice,
  productOldPrice,
  productNewPrice,
  productPriceContainer,
} = styles;

const ProductNamePrice = ({ product: { title, price, sale } }) => {
  return (
    <div className={productNamePriceContainer}>
      <h2 className={productName}>{title}</h2>
      <div className={productPriceContainer}>
        <span className={sale ? productOldPrice : productPrice}>
          ${calculatePrice(true, sale, price)}
        </span>
        {!!sale && (
          <span className={productNewPrice}>
            ${calculatePrice(false, sale, price)}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductNamePrice;
