import React, { useState } from "react";
import getCounterArr from "../../helpers/getCounterArray";
import { StarFill } from "../../svg";
import styles from "./rateProduct.module.scss";
const {
  rateProductContainer,
  starItem,
  selectedStarItem,
  rateProductLabel,
  rateProductValue,
} = styles;

const RateProduct = ({ onChange }) => {
  const [selectedStarValue, setSelectedStarValue] = useState(0);
  const [finalStarValue, setFinalStarValue] = useState(0);

  const onStarClick = (value) => {
    setSelectedStarValue(value);
    onChange(value);
    setFinalStarValue(value);
  };

  return (
    <div
      onMouseLeave={() => setSelectedStarValue(finalStarValue)}
      className={rateProductContainer}
    >
      <span className={rateProductLabel}>product rate</span>
      <div>
        {getCounterArr(5).map((index) => {
          const selectedStarClass =
            index < selectedStarValue ? selectedStarItem : "";
          return (
            <span
              onClick={() => onStarClick(index + 1)}
              onMouseEnter={() => setSelectedStarValue(index + 1)}
              className={`${starItem} ${selectedStarClass} `}
            >
              <StarFill />
            </span>
          );
        })}
        <span className={rateProductValue}> {finalStarValue} </span>
      </div>
    </div>
  );
};

export default RateProduct;
