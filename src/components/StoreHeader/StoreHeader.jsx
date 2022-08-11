import React from "react";
import { useSearchParams } from "react-router-dom";
import productsSortings from "../../data/lookups/productsSortings";
import { Filter } from "../../svg";
import Select from "../core/Select/Select";
import styles from "./storeHeader.module.scss";
const { storeHeader, storeProductsCount, storeFilterIcon, filterOpen } = styles;

const StoreHeader = ({ getToggleProps, isExpanded }) => {
  const dummyItems = productsSortings;
  const [searchParams] = useSearchParams();
  const defaultSortValue = searchParams.get("sortBy") || dummyItems[0].id;

  const isOpenClass = isExpanded ? filterOpen : "";

  return (
    <div className={storeHeader}>
      <div>
        <Select
          items={dummyItems}
          placeholder="sort by"
          defaultValue={defaultSortValue}
          label="sort by"
        />
        <span className={storeProductsCount}></span>
      </div>
      <span
        {...getToggleProps()}
        className={`${storeFilterIcon} ${isOpenClass} `}
      >
        <Filter />
      </span>
    </div>
  );
};

export default StoreHeader;
