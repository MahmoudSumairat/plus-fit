import React from "react";
import bagItems from "../../../data/bag/bagItems";
import deliveryReturns, {
  deliveryFees,
} from "../../../data/bag/deliveryReturns";
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
} = styles;

const BagSidebar = () => {
  const calculateSubtotal = () => {
    let total = bagItems
      .map((item) => item.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    return total;
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
            ${calculateSubtotal().toFixed(2)}{" "}
          </span>
        </div>
        <div className={bagSidebarPriceData}>
          <span className={bagSidebarDataTitle}>delivery fees</span>
          <span className={bagSidebarDataValue}>
            ${deliveryFees.toFixed(2)}{" "}
          </span>
        </div>
        <div className={bagSidebarPriceData}>
          <span className={bagSidebarDataTitle}>total</span>
          <span className={bagSidebarDataValue}>
            ${(calculateSubtotal() + deliveryFees).toFixed(2)}
          </span>
        </div>
        <Button className={checkoutButton}>proceed to checkout</Button>
      </div>
    </div>
  );
};

export default BagSidebar;
