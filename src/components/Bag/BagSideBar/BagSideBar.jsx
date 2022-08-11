import React from "react";
import bagItems from "../../../data/bag/bagItems";
import deliveryReturns from "../../../data/bag/deliveryReturns";
import Button from "../../core/Button/Button";
import styles from "./bagSideBar.module.scss";

const {
  bagSidebar,
  bagSidebarTitle,
  bagSidebarDataTitle,
  bagSidebarDataValue,
  bagSidebarDeliveryData,
  bagSidebarPriceData,
  bagSidebarDeliveryReturns,
  bagSidebarDeliveryPrice,
  checkoutButton,
  discountPrice,
  totalPrice,
} = styles;

const BagSidebar = () => {
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
    <div className={bagSidebar}>
      <div>
        <h4 className={bagSidebarTitle}>Delivery and returns</h4>
        <div className={bagSidebarDeliveryReturns}>
          {deliveryReturns.map((data) => {
            return (
              <div key={data.title} className={bagSidebarDeliveryData}>
                <span className={bagSidebarDataTitle}> {data.title} </span>
                <span className={bagSidebarDataValue}> {data.value} </span>
              </div>
            );
          })}
        </div>
      </div>

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
        <Button className={checkoutButton}>proceed to checkout</Button>
      </div>
    </div>
  );
};

export default BagSidebar;
