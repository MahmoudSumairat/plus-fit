import React from "react";
import styles from "./checkoutList.module.scss";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutHeader from "./CheckoutHeader/CheckoutHeader";
import calculateTotal from "../../helpers/calculateTotal";
const { checkoutList, checkoutTotal, checkoutTotalData, checkoutInfo } = styles;

const CheckoutList = ({ bagItems }) => {
  const totalPrice = calculateTotal(bagItems);

  return (
    <div className={checkoutList}>
      <CheckoutHeader />
      {bagItems.map((item) => (
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
