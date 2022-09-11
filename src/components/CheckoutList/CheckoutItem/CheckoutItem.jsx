import React from "react";
import { PRODUCT_COLOR_TITLES } from "../../../constants/productColors";
import { PRODUCT_SIZE_TITLES } from "../../../constants/productSizes";
import calculatePrice from "../../../helpers/calculatePrice";
import styles from "./checkoutItem.module.scss";
const {
  checkoutItem,
  itemImgContainer,
  itemImg,
  itemInfo,
  itemTitle,
  itemSelectedOption,
  itemTotals,
  itemInfoContainer,
} = styles;

const CheckoutItem = ({ item }) => {
  const price = calculatePrice(false, item.sale, item.price);

  return (
    <div className={checkoutItem}>
      <div className={itemInfoContainer}>
        <div className={itemImgContainer}>
          <img className={itemImg} alt={item.title} src={item.imgUrl} />
        </div>
        <div className={itemInfo}>
          <h4 className={itemTitle}> {item.title} </h4>
          <span className={itemSelectedOption}>
            size: {PRODUCT_SIZE_TITLES[item.selectedSize]}
          </span>
          <span className={itemSelectedOption}>
            color: {PRODUCT_COLOR_TITLES[item.selectedColor]}
          </span>
        </div>
      </div>
      <div className={itemTotals}>
        <p className={itemSelectedOption}> {item.quantity} </p>
        <p className={itemSelectedOption}> ${price} </p>
        <p className={itemSelectedOption}>
          ${(price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItem;
