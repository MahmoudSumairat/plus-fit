import React, { useEffect, useState } from "react";
import { getBestSellerProducts } from "../../API/endpoints/bestSellers";
import Product from "../Product/Product";
import Button from "../shared/Button/Button";
import styles from "./bestSellers.module.scss";
const {
  bestSellersTitle,
  bestSellersProduct,
  bestSellersSection,
  bestSellersProductsContainer,
  bestSellersExplore,
} = styles;

const BestSellers = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    setBestSellerProducts(getBestSellerProducts());
  }, []);

  return (
    <section className={bestSellersSection}>
      <h2 className={bestSellersTitle}>Best sellers</h2>
      <div className={bestSellersProductsContainer}>
        {bestSellerProducts.map((product) => {
          return <Product className={bestSellersProduct} product={product} />;
        })}
      </div>
      <div className={bestSellersExplore}>
        <Button buttonType="borderDark">explore more</Button>
      </div>
    </section>
  );
};

export default BestSellers;
