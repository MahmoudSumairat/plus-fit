import React, { useEffect, useState } from "react";
import { getBestSellerProducts } from "../../API/endpoints/bestSellers";
import Product from "../Product/Product";
import Button from "../core/Button/Button";
import styles from "./bestSellers.module.scss";
import { Link } from "react-router-dom";
import { getAllProductsAPI } from "../../API/endpoints/products";
const {
  bestSellersTitle,
  bestSellersProduct,
  bestSellersSection,
  bestSellersProductsContainer,
  bestSellersExplore,
} = styles;

const PER_PAGE =
  window.innerWidth <= 520 ? 5 : window.innerWidth <= 768 ? 9 : 10;

const BestSellers = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const {
        data: {
          data: { products },
        },
      } = await getAllProductsAPI(PER_PAGE, 1);
      setBestSellerProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={bestSellersSection}>
      <h2 className={bestSellersTitle}>Best sellers</h2>
      <div className={bestSellersProductsContainer}>
        {bestSellerProducts.map((product, index) => {
          return (
            <Product
              key={index}
              className={bestSellersProduct}
              product={product}
            />
          );
        })}
      </div>
      <div className={bestSellersExplore}>
        <Link to="/store?sortBy=best-sellers">
          <Button buttonType="borderDark">explore more</Button>
        </Link>
      </div>
    </section>
  );
};

export default BestSellers;
