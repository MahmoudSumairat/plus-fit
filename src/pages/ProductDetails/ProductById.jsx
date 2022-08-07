import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsList from "../../data/store/products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const ProductById = () => {
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
    <>
      <ProductDetails productData={productData} />
      <RelatedProducts />
    </>
  );
};

export default ProductById;
