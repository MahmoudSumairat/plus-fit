import React from "react";
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
          <img className={itemImg} alt={item.title} src={item.productImg} />
        </div>
        <div className={itemInfo}>
          <h4 className={itemTitle}> {item.title} </h4>
          <span className={itemSelectedOption}>size : {item.selectedSize}</span>
          <span className={itemSelectedOption}>
            color : {item.selectedColor}
          </span>
        </div>
      </div>
      <div className={itemTotals}>
        <span className={itemSelectedOption}> {item.selectedQuantity} </span>
        <span className={itemSelectedOption}> ${price} </span>
        <span className={itemSelectedOption}>
          ${(price * item.selectedQuantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
