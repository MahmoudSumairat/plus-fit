import React from "react";
import Tabs from "../core/Tabs/Tabs";
import AddToWishList from "./AddToWishList/AddToWishList";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import ProductActions from "./ProductActions/ProductActions";
import ProductColor from "./ProductColor/ProductColor";
import ProductImages from "./ProductImages/ProductImages";
import ProductNamePrice from "./ProductNamePrice/ProductNamePrice";
import ProductOverview from "./ProductOverview/ProductOverview";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductRate from "./ProductRate/ProductRate";
import ProductSize from "./ProductSize/ProductSize";
import ProductSpecs from "./ProductSpecs/ProductSpecs";
import styles from "./productDetails.module.scss";

const { productInfo, productDetailsContainer, productSpecs } = styles;

const ProductDetails = ({ productData }) => {
  const tabs = [
    {
      title: "product overview",
      component: <ProductOverview product={productData} />,
    },
    {
      title: "product details",
      component: <ProductSpecs product={productData} />,
    },
    {
      title: "customer reviews",
      component: <CustomerReviews product={productData} />,
    },
  ];

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
        <div className={productSpecs}>
          <Tabs tabs={tabs} />
        </div>
      </div>
    )
  );
};

export default ProductDetails;
