import React from "react";
import styles from "./checkoutList.module.scss";
import checkoutItems, { totalPrice } from "../../data/checkout/checkoutItems";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
const { checkoutList, checkoutTotal, checkoutTotalData, checkoutInfo } = styles;

const CheckoutList = () => {
  return (
    <div className={checkoutList}>
      <CheckoutHeader />
      {checkoutItems.map((item) => (
        <CheckoutItem item={item} />
      ))}
      <div className={checkoutTotal}>
        <div className={checkoutTotalData}>
          <span className={checkoutInfo}>items total : </span>
          <span className={checkoutInfo}> ${totalPrice.toFixed(2)} </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutList;
