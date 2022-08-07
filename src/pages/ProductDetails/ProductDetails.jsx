import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./productDetails.module.scss";
import productsList from "../../data/store/products";
import ProductImages from "../../components/ProductDetails/ProductImages/ProductImages";
import ProductNamePrice from "../../components/ProductDetails/ProductNamePrice/ProductNamePrice";
import ProductRate from "../../components/ProductDetails/ProductRate/ProductRate";
import ProductSize from "../../components/ProductDetails/ProductSize/ProductSize";
import ProductColor from "../../components/ProductDetails/ProductColor/ProductColor";
import AddToWishList from "../../components/ProductDetails/AddToWishList/AddToWishList";
import ProductQuantity from "../../components/ProductDetails/ProductQuantity/ProductQuantity";
import ProductActions from "../../components/ProductDetails/ProductActions/ProductActions";
const { productInfo, productDetailsContainer } = styles;

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProduct();
  });

  const fetchProduct = () => {
    const product = productsList.find((product) => product.id === +productId);
    setProductData(product);
  };
  return (
    productData && (
      <div className={productDetailsContainer}>
        <ProductImages product={productData} />
        <div className={productInfo}>
          <ProductNamePrice product={productData} />
          <ProductRate product={productData} />
          <ProductSize product={productData} />
          <ProductColor product={productData} />
          <AddToWishList product={productData} />
          <ProductQuantity />
          <ProductActions />
        </div>
      </div>
    )
  );
};

export default ProductDetails;
