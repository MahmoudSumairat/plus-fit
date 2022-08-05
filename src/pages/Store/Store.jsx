import React from "react";
import Select from "../../components/core/Select/Select";
import styles from "./store.module.scss";
import productSortings from "../../data/lookups/productsSortings";
import StoreHeader from "../../components/StoreHeader/StoreHeader";

const { storePage, storeFilter, storeProductsContainer } = styles;

const Store = () => {
  return (
    <div className={storePage}>
      <StoreHeader />
      <div className={storeFilter}></div>
      <div className={storeProductsContainer}></div>
    </div>
  );
};

export default Store;
