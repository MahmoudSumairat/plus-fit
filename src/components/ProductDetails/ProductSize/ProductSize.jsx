import React, { useState } from "react";
import styles from "./productSize.module.scss";
const { productSizesContainer, sizesTitle, productSizeItem, activeSize } =
  styles;

const ProductSize = ({
  product: { availableSizes },
  onSizeChange = () => {},
}) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0);

  const onSizeClick = (size, index) => {
    setActiveSizeIndex(index);
    onSizeChange(size.size_id);
  };

  return (
    <>
      <span className={sizesTitle}>Sizes:</span>
      <div className={productSizesContainer}>
        {availableSizes.map((size, index) => {
          const activeSizeClass = activeSizeIndex === index ? activeSize : "";
          return (
            <span
              key={size.size_id}
              className={`${productSizeItem} ${activeSizeClass}`}
              onClick={() => onSizeClick(size, index)}
            >
              {size.title}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default ProductSize;
