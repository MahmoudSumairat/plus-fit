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
  const [pagesCount, setPagesCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const PRODUCTS_PER_PAGE = 12;

  useEffect(() => {
    if (productCategory !== "store") {
      console.log(productCategory);
      fetchAllProductsByType();
    } else {
      fetchAllProducts();
    }
  }, [location.pathname]);

  const fetchAllProducts = async (pageNumber = 1) => {
    try {
      const {
        data: {
          data: { products, totalElements },
        },
      } = await getAllProductsAPI(PRODUCTS_PER_PAGE, pageNumber);
      setProducts(products);
      setPagesCount(Math.ceil(totalElements / PRODUCTS_PER_PAGE));
      setCurrentPageNumber(pageNumber);
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

  console.log(pagesCount);

  return (
    <div className={storePage}>
      <StoreHeader isExpanded={isExpanded} getToggleProps={getToggleProps} />
      <div {...getCollapseProps()}>
        <StoreFilter categorySelected={!isMainPageStore} />
      </div>
      {products.length ? (
        <>
          <StoreProducts category={productCategory} products={products} />
          <ProductsPagination
            currentPageIndex={currentPageNumber}
            onPageIndexChange={(pageNumber) => fetchAllProducts(pageNumber)}
            pagesCount={pagesCount}
          />
        </>
      ) : (
        <p className={noProducts}>no products yet ... </p>
      )}
    </div>
  );
};

export default Store;
