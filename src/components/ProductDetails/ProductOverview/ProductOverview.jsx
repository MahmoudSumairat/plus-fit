import React from "react";
import styles from "./productOverview.module.scss";

const { productOverview, productOverviewItem } = styles;

const ProductOverview = ({ product: { overviews } }) => {
  return (
    <ul className={productOverview}>
      {overviews.map((item) => {
        return (
          <li key={item.overview_id} className={productOverviewItem}>
            {item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default ProductOverview;
