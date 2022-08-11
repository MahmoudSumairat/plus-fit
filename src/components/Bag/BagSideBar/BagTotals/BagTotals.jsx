import React from "react";
import bagItems from "../../../../data/bag/bagItems";
import Button from "../../../core/Button/Button";
import styles from "./bagTotals.module.scss";

const {
  bagSidebarDataTitle,
  bagSidebarDataValue,
  bagSidebarPriceData,
  bagSidebarDeliveryPrice,
  checkoutButton,
  discountPrice,
  totalPrice,
} = styles;

const BagTotals = ({ proceedToCheckout }) => {
  const calculateSubtotal = () => {
    let subTotal = bagItems
      .map((item) => item.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return subTotal;
  };

  const calculateTotal = () => {
    let total = bagItems
      .map((item) =>
        item.sale ? item.price - item.price * (item.sale / 100) : item.price
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return total;
  };

  const calculateDiscounts = () => {
    let discounts = bagItems
      .map((item) => (item.sale ? item.price * (item.sale / 100) : 0))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return discounts;
  };

  return (
    <div className={bagSidebarDeliveryPrice}>
      <div className={bagSidebarPriceData}>
        <span className={bagSidebarDataTitle}>subtotal</span>
        <span className={bagSidebarDataValue}>
          ${calculateSubtotal().toFixed(2)}
        </span>
      </div>
      <div className={bagSidebarPriceData}>
        <span className={bagSidebarDataTitle}>total discounts</span>
        <span className={`${bagSidebarDataValue}  ${discountPrice} `}>
          - ${calculateDiscounts().toFixed(2)}
        </span>
      </div>
      <div className={bagSidebarPriceData}>
        <span className={bagSidebarDataTitle}>total</span>
        <span className={`${bagSidebarDataValue} ${totalPrice} `}>
          ${calculateTotal().toFixed(2)}
        </span>
      </div>
      <Button onClick={proceedToCheckout} className={checkoutButton}>
        proceed to checkout
      </Button>
    </div>
  );
};

export default BagTotals;
