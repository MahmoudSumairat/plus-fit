import React from "react";
import Select from "../../core/Select/Select";
import ProductQuantity from "../../ProductDetails/ProductQuantity/ProductQuantity";
import styles from "./bagItem.module.scss";
import { Clear } from "../../../svg";
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

const BagItem = ({
  item,
  removeBagItem,
  onColorChange,
  onSizeChange,
  onQuantityChange,
}) => {
  return (
    item.availableSizes.length &&
    item.availableColors.length && (
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
                defaultQuantity={item.quantity}
                withStockInfo={false}
                onChange={(value) =>
                  onQuantityChange(value, item.productId, item.bagItemId)
                }
              />
              <Select
                label="size"
                className={bagItemOptionsSelect}
                defaultValue={item.selectedSize}
                items={item.availableSizes}
                onChange={(value) =>
                  onSizeChange(value, item.productId, item.bagItemId)
                }
              />
              <Select
                label="color"
                className={bagItemOptionsSelect}
                defaultValue={item.selectedColor}
                items={item.availableColors}
                onChange={(value) =>
                  onColorChange(value, item.productId, item.bagItemId)
                }
              />
            </div>
            <span className={productPrice}>
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>

        <span
          onClick={() => removeBagItem(item.bagItemId)}
          className={removeProduct}
        >
          <Clear />
        </span>
      </li>
    )
  );
};

export default BagItem;
