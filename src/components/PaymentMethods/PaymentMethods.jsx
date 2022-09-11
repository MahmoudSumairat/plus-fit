import React from "react";
import styles from "./paymentMethods.module.scss";
import Button from "../core/Button/Button";

const {
  paymentMethodsContainer,
  paymentMethodsTitle,
  paymentMethodsButton,
  paymentMethodsButtonContainer,
} = styles;

const PaymentMethods = ({ onClick, isFormValid, isLoading }) => {
  return (
    <div className={paymentMethodsContainer}>
      <h4 className={paymentMethodsTitle}>Payment</h4>
      <div className={paymentMethodsButtonContainer}>
        <Button
          onClick={onClick}
          disabled={!isFormValid}
          className={paymentMethodsButton}
          isLoading={isLoading}
        >
          Pay and place order
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethods;
