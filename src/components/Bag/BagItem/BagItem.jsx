import React, { useState } from "react";
import Select from "../../core/Select/Select";
import ProductQuantity from "../../ProductDetails/ProductQuantity/ProductQuantity";
import styles from "./bagItem.module.scss";
import { Clear } from "../../../svg";
import { getColorsAPI, getSizesAPI } from "../../../API/endpoints/lookups";
const {
  bagItem,
  bagItemImg,
  bagItemImgContainer,
  productInfo,
  productTitle,
  productOptions,
  productOptionsContainer,
  productPrice,
  bagItemQuantity,
  bagItemOptionsSelect,
  removeProduct,
} = styles;

const BagItem = ({ item, removeBagItem, sizes, colors }) => {
  return (
    <li className={bagItem}>
      <div className={bagItemImgContainer}>
        <img className={bagItemImg} src={item.imgUrl} alt={item.title} />
      </div>
      <div className={productInfo}>
        <h4 className={productTitle}>{item.title}</h4>
        <div className={productOptionsContainer}>
          <div className={productOptions}>
            <ProductQuantity
              className={bagItemQuantity}
              defaultQuantity={item.selectedQuantity}
              withStockInfo={false}
            />
            <Select
              label="size"
              className={bagItemOptionsSelect}
              defaultValue={item.selectedSize}
              items={sizes}
            />
            <Select
              label="color"
              className={bagItemOptionsSelect}
              defaultValue={item.selectedColor}
              items={colors}
            />
          </div>
          <span className={productPrice}>${item.price.toFixed(2)}</span>
        </div>
      </div>

      <span
        onClick={() => removeBagItem(item.bagItemId)}
        className={removeProduct}
      >
        <Clear />
      </span>
    </li>
  );
};

export default BagItem;
