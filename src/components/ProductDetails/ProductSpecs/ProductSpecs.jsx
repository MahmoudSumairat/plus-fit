import React from "react";
import { Shipment } from "../../../svg";
import styles from "./productSpecs.module.scss";
const {
  specsContainer,
  specsInfo,
  specsInfoItem,
  specsInfoTitle,
  specsInfoValue,
  specsShipment,
  shipmentTitle,
  shipmentCountry,
  shipmentEstimate,
} = styles;

const ProductSpecs = ({ product: { specs, shipment } }) => {
  return (
    <div className={specsContainer}>
      <ul className={specsInfo}>
        {specs.map((spec) => {
          return (
            <li className={specsInfoItem}>
              <span className={specsInfoTitle}>{spec.title}:</span>
              <span className={specsInfoValue}> {spec.value} </span>
            </li>
          );
        })}
      </ul>
      <div className={specsShipment}>
        <Shipment />
        <h4 className={shipmentTitle}> Shipment details </h4>
        <div className={shipmentCountry}>
          <span className={specsInfoTitle}>country of shipment</span>
          <span className={specsInfoValue}>{shipment.country}</span>
        </div>
        <p className={shipmentEstimate}>
          we usually start after 2 days of order
        </p>
      </div>
    </div>
  );
};

export default ProductSpecs;
