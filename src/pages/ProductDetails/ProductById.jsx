import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import productsList from "../../data/store/products";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { getProductDetailsAPI } from "../../API/endpoints/products";

const ProductById = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const {
        data: { data },
      } = await getProductDetailsAPI(productId);
      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return productData && <ProductDetails productData={productData} />;
};

export default ProductById;
