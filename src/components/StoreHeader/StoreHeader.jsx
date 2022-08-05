import React from "react";
import productsSortings from "../../data/lookups/productsSortings";
import Select from "../core/Select/Select";
import styles from "./storeHeader.module.scss";
const { storeHeader, storeProductsCount, storeFilterIcon } = styles;

const StoreHeader = () => {
  const dummyItems = productsSortings;

  return (
    <div className={storeHeader}>
      <div>
        <Select
          items={dummyItems}
          placeholder="sort by"
          defaultValue={dummyItems[0].id}
          label="sort by"
        />
        <span className={storeProductsCount}></span>
      </div>
      <span className={storeFilterIcon}></span>
    </div>
  );
};

export default StoreHeader;
