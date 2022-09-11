import React from "react";
import { useNavigate } from "react-router";
import deliveryReturns from "../../../data/bag/deliveryReturns";
import styles from "./bagSideBar.module.scss";
import BagTotals from "./BagTotals/BagTotals";

const {
  bagSidebar,
  bagSidebarTitle,
  bagSidebarDataTitle,
  bagSidebarDataValue,
  bagSidebarDeliveryData,
  bagSidebarDeliveryReturns,
} = styles;

const BagSidebar = ({ bagItems }) => {
  const navigate = useNavigate();
  const proceedToCheckout = () => {
    // do api stuff
    navigate("/checkout", { replace: true });
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

      <BagTotals bagItems={bagItems} proceedToCheckout={proceedToCheckout} />
    </div>
  );
};

export default BagSidebar;
