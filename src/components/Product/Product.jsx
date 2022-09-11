import React, { useState } from "react";
import Button from "../core/Button/Button";
import styles from "./product.module.scss";
import { StarFill } from "../../svg";
import { useNavigate } from "react-router";
import calculatePrice from "../../helpers/calculatePrice";
import { useDispatch } from "react-redux";
import { addToBag } from "../../redux/actionCreators/bag";

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
  const { mainImgUrl, title, price, sale, rate, rates_count } = product;
  const navigate = useNavigate();

  const getRatingStars = () => {
    const counterArr = [];
    const counter = Math.ceil(rate / rates_count);
    for (let i = 0; i < counter; i++) {
      counterArr.push(i);
    }
    return counterArr.map((item, index) => {
      return <StarFill key={index} />;
    });
  };

  const onProductClick = () => {
    navigate(`/products/${product.product_id}`);
  };

  return (
    <div onClick={onProductClick} className={`${productBox} ${className} `}>
      <img alt={title} src={mainImgUrl} className={productImage} />
      <div className={productInfo}>
        <h6 className={productTitle}>{title}</h6>
        <span className={sale ? productOldPrice : productNewPrice}>
          ${calculatePrice(true, sale, price)}
        </span>
        <span className={productRating}>
          {getRatingStars()} <span>{rate / rates_count}</span>{" "}
        </span>
        {!!sale && (
          <span className={productNewPrice}>
            ${calculatePrice(false, sale, price)}
          </span>
        )}
      </div>
      <Button className={productButton}>Details</Button>
    </div>
  );
};

export default Product;
