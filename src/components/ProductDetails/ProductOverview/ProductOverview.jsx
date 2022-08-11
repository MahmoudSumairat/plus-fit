import React from "react";
import styles from "./productOverview.module.scss";

const { productOverview, productOverviewItem } = styles;

const ProductOverview = ({ product: { overview } }) => {
  return (
    <ul className={productOverview}>
      {overview.map((item) => {
        return (
          <li key={item} className={productOverviewItem}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default ProductOverview;
