import React, { useEffect, useState } from "react";
import styles from "./store.module.scss";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import StoreFilter from "../../components/StoreFilter/StoreFilter";
import useCollapse from "react-collapsed";
import StoreProducts from "../../components/StoreProducts/StoreProducts";
import ProductsPagination from "../../components/ProductsPagination/ProductsPagination";
import {
  getAllProductsAPI,
  getProductsByTypeAPI,
} from "../../API/endpoints/products";
import { useLocation } from "react-router";
import routesList from "../../routes/routesList";
import { PRODUCTS_CATEGORIES } from "../../constants/productsCategories";

const { storePage, noProducts } = styles;

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productCategory !== "store") {
      console.log(productCategory);
      fetchAllProductsByType();
    } else {
      fetchAllProducts();
    }
  }, []);

  const fetchAllProducts = async () => {
    try {
      const {
        data: { data },
      } = await getAllProductsAPI(10, 1);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllProductsByType = async () => {
    try {
      const {
        data: { data },
      } = await getProductsByTypeAPI(
        PRODUCTS_CATEGORIES[productCategory],
        10,
        1
      );
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={storePage}>
      <StoreHeader isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <StoreFilter categorySelected={!isMainPageStore} />
      </div>
      {products.length ? (
        <>
          <StoreProducts category={productCategory} products={products} />
          <ProductsPagination pagesCount={5} />
        </>
      ) : (
        <p className={noProducts}>no products yet ... </p>
      )}
    </div>
  );
};

export default Store;
