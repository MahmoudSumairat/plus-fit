import React from "react";
import styles from "./checkoutHeader.module.scss";

const { checkoutHeader, checkoutTitle, checkoutInfoContainer, checkoutInfo } =
  styles;

const CheckoutHeader = () => {
  return (
    <div className={checkoutHeader}>
      <h1 className={checkoutTitle}>Order summary : </h1>
      <div className={checkoutInfoContainer}>
        <span className={checkoutInfo}>quantity</span>
        <span className={checkoutInfo}>price</span>
        <span className={checkoutInfo}>total</span>
      </div>
    </div>
  );
};

export default CheckoutHeader;
