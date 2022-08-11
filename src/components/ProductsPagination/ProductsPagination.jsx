import React from "react";
import styles from "./productsPagination.module.scss";
const { productsPaginationContainer, productsPage, activePage } = styles;

const initializePagesArr = (pagesCount) => {
  const pagesArr = [];
  for (let i = 0; i < pagesCount; i++) {
    pagesArr.push(i);
  }
  return pagesArr;
};

const ProductsPagination = ({
  pagesCount,
  onPageIndexChange = () => {},
  currentPageIndex = 1,
}) => {
  const pagesArr = initializePagesArr(pagesCount);

  return (
    <div className={productsPaginationContainer}>
      {pagesArr.map((pageIndex) => {
        return (
          <span
            key={pageIndex}
            className={`${productsPage} ${
              currentPageIndex === pageIndex + 1 ? activePage : ""
            } `}
            onClick={() => onPageIndexChange(pageIndex + 1)}
          >
            {pageIndex + 1}
          </span>
        );
      })}
    </div>
  );
};

export default ProductsPagination;
