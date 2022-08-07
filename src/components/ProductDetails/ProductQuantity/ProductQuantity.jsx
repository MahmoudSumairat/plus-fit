import React, { useState } from "react";
import { ChevronDown } from "../../../svg";
import styles from "./productQuantity.module.scss";

const {
  productQuantityContainer,
  quantityContainer,
  increase,
  decrease,
  quantityValue,
  quantityTitle,
  quantityControl,
  stockLabel,
  outOfStock,
} = styles;

const ProductQuantity = ({
  defaultQuantity = 1,
  maxQuantity = 100,
  onChange = () => {},
}) => {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const minValue = 1;

  const changeQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const onQuantityInputChange = ({ target: { value } }) => {
    let newQuantity = value;

    if (value >= maxQuantity) {
      newQuantity = maxQuantity;
    }

    if (value <= minValue) {
      newQuantity = minValue;
    }

    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const outOfStockClass = !maxQuantity ? outOfStock : "";
  const stockTitle = !maxQuantity ? "out of stock" : "in stock";

  return (
    <div className={productQuantityContainer}>
      <span className={quantityTitle}>Quantity:</span>
      <div className={quantityControl}>
        <div className={quantityContainer}>
          <button
            disabled={quantity <= minValue}
            onClick={() => changeQuantity(quantity - 1)}
            className={decrease}
          >
            <ChevronDown />
          </button>
          <input
            onChange={onQuantityInputChange}
            value={quantity}
            className={quantityValue}
            type="number"
          />
          <button
            disabled={quantity >= maxQuantity}
            onClick={() => changeQuantity(quantity + 1)}
            className={increase}
          >
            <ChevronDown />
          </button>
        </div>
        <span className={`${stockLabel} ${outOfStockClass} `}>
          {stockTitle}
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;
