import React from "react";
import styles from "./store.module.scss";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import useCollapse from "react-collapsed";
import StoreProducts from "../../components/StoreProducts/StoreProducts";
import ProductsPagination from "../../components/ProductsPagination/ProductsPagination";
import { useLocation } from "react-router";
import routesList from "../../routes/routesList";

const { storePage } = styles;

const getProductCategory = (location) => {
  return location.pathname.split("/")[1];
};

const getIsMainPageStore = (category) => {
  return category === routesList.find((route) => route.mainStorePage).name;
};

const Store = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const location = useLocation();
  const productCategory = getProductCategory(location);
  const isMainPageStore = getIsMainPageStore(productCategory);

  return (
    <div className={storePage}>
      <StoreHeader isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <StoreFilter categorySelected={!isMainPageStore} />
      </div>
      <StoreProducts category={productCategory} />
      <ProductsPagination pagesCount={5} />
    </div>
  );
};

export default Store;
