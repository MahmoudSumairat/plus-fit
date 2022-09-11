import React from "react";
import Radio from "../core/Radio/Radio";
import shippingMethods from "../../data/checkout/shippingMethods";
import styles from "./shippingMethods.module.scss";
const {
  shippingMethodsContainer,
  shippingMethod,
  methodCarrier,
  methodEstimate,
  shippingMethodsTitle,
} = styles;

const ShippingMethods = ({ onChange }) => {
  return (
    <div className={shippingMethodsContainer}>
      <h4 className={shippingMethodsTitle}>Shipping Methods:</h4>
      {shippingMethods.map((method) => {
        return (
          <div className={shippingMethod}>
            <Radio
              name="shippingMethod"
              key={method.id}
              label={`$${method.price.toFixed(2)}`}
              onChange={onChange}
            />
            <span className={methodCarrier}>{method.carrier}</span>
            <span className={methodEstimate}>
              {method.minDays} to {method.maxDays} business days{" "}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ShippingMethods;
