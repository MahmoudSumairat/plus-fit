import React from "react";
import styles from "./paymentMethods.module.scss";
import Button from "../core/Button/Button";

const {
  paymentMethodsContainer,
  paymentMethodsTitle,
  paymentMethodsButton,
  paymentMethodsButtonContainer,
} = styles;

const PaymentMethods = () => {
  return (
    <div className={paymentMethodsContainer}>
      <h4 className={paymentMethodsTitle}>Payment</h4>
      <div className={paymentMethodsButtonContainer}>
        <Button className={paymentMethodsButton}>Pay and place order</Button>
        <Button className={paymentMethodsButton}>pay with paypal</Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
