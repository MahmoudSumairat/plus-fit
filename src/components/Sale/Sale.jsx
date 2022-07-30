import React, { useState, useEffect } from "react";
import styles from "./sale.module.scss";
import saleImg from "../../data/sale/images/sale.jpg";
import { getSaleValue, getSaleStylesCount } from "../../API/endpoints/sale";
import Button from "../core/Button/Button";
const {
  saleSection,
  saleImage,
  saleOverlay,
  saleImageText,
  saleTitle,
  saleDescription,
  saleImageBox,
  saleDescriptionBox,
} = styles;

const Sale = () => {
  const [saleValue, setSaleValue] = useState();
  const [saleStylesCount, setSaleStylesCount] = useState();

  useEffect(() => {
    setSaleValue(getSaleValue());
    setSaleStylesCount(getSaleStylesCount());
  }, []);

  return (
    <section className={saleSection}>
      <div className={saleImageBox}>
        <div className={saleOverlay} />
        <img className={saleImage} alt="saleImage" src={saleImg} />
        <h5 className={saleImageText}>
          {saleValue}% off <br /> over a {saleStylesCount} styles
        </h5>
      </div>
      <div className={saleDescriptionBox}>
        <p className={saleTitle}>
          get a {saleValue}% off over a {saleStylesCount} styles
        </p>
        <p className={saleDescription}>
          refill your energy with a massive collection of brand new styles
        </p>
        <Button buttonType="borderDark">shop now</Button>
      </div>
    </section>
  );
};

export default Sale;
