import React from "react";
import { StarFill } from "../../../svg";
import styles from "./productRate.module.scss";

const { starsContainer, rateText } = styles;

const ProductRate = ({ product: { rate = 0, rates_count } }) => {
  const getRateCountingArray = () => {
    const countingArr = [];

    for (let i = 0; i < Math.ceil(rate / rates_count); i++) {
      countingArr.push(i);
    }

    return countingArr;
  };

  return (
    <div className={starsContainer}>
      {getRateCountingArray().map((item) => {
        return <StarFill key={item} />;
      })}

      <span className={rateText}>{rate / rates_count}</span>
    </div>
  );
};

export default ProductRate;
