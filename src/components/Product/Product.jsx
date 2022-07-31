import React from "react";
import Button from "../core/Button/Button";
import styles from "./product.module.scss";
import { StarFill } from "../../svg";

const {
  productBox,
  productImage,
  productTitle,
  productOldPrice,
  productNewPrice,
  productRating,
  productButton,
  productInfo,
} = styles;

const Product = ({ product, className = "" }) => {
  const { imgUrl, title, price, sale, rate } = product;

  const calculatePrice = (originalPrice) => {
    if (!sale || originalPrice) {
      return price.toFixed(2);
    }

    return (price - (sale * price) / 100).toFixed(2);
  };

  const getRatingStars = () => {
    const counterArr = [];
    const counter = Math.ceil(rate);
    for (let i = 0; i < counter; i++) {
      counterArr.push(i);
    }
    return counterArr.map((item, index) => {
      return <StarFill key={index} />;
    });
  };

  return (
    <div className={`${productBox} ${className} `}>
      <img alt={title} src={imgUrl} className={productImage} />
      <div className={productInfo}>
        <h6 className={productTitle}>{title}</h6>
        <span className={sale ? productOldPrice : productNewPrice}>
          ${calculatePrice(true)}
        </span>
        <span className={productRating}>
          {getRatingStars()} <span>{rate}</span>{" "}
        </span>
        {!!sale && <span className={productNewPrice}>${calculatePrice()}</span>}
      </div>
      <Button className={productButton}>add to bag</Button>
    </div>
  );
};

export default Product;
