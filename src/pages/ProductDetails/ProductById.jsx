import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsList from "../../data/store/products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { getProductDetailsAPI } from "../../API/endpoints/products";

const ProductById = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await getProductDetailsAPI(productId);
      setProductData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    productData && (
      <ProductDetails isLoading={isLoading} productData={productData} />
    )
  );
};

export default ProductById;
