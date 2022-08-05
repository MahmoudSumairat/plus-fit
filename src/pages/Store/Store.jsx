import React from "react";
import styles from "./store.module.scss";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import useCollapse from "react-collapsed";
import StoreProducts from "../../components/StoreProducts/StoreProducts";
import ProductsPagination from "../../components/ProductsPagination/ProductsPagination";

const { storePage } = styles;

const Store = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className={storePage}>
      <StoreHeader isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <StoreFilter />
      </div>
      <StoreProducts />
      <ProductsPagination pagesCount={5} />
    </div>
  );
};

export default Store;
