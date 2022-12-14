import React, { useState } from "react";
import { PRODUCT_COLORS } from "../../../constants/productColors";
import styles from "./productColor.module.scss";
const {
  productColor,
  productColorsContainer,
  colorItem,
  productColorTitle,
  activeColor,
} = styles;

const ProductColor = ({
  product: { availableColors },
  onColorChange = () => {},
}) => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const onColorClick = (value, index) => {
    setActiveColorIndex(index);
    onColorChange(value.color_id);
  };

  return (
    <div className={productColor}>
      <span className={productColorTitle}>colors:</span>
      <div className={productColorsContainer}>
        {availableColors.map((color, index) => {
          const activeClass = activeColorIndex === index ? activeColor : "";
          return (
            <span
              onClick={() => onColorClick(color, index)}
              className={`${colorItem} ${activeClass} `}
              style={{ backgroundColor: PRODUCT_COLORS[color.title] }}
              key={color.hex}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColor;
