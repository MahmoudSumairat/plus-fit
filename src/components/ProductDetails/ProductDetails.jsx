import React, { useEffect, useState } from "react";
import Tabs from "../core/Tabs/Tabs";
import { addBagItemAPI, deleteBagItemAPI } from "../../API/endpoints/bagItems";
import CustomerReviews from "./CustomerReviews/CustomerReviews";
import ProductActions from "./ProductActions/ProductActions";
import ProductColor from "./ProductColor/ProductColor";
import ProductImages from "./ProductImages/ProductImages";
import ProductNamePrice from "./ProductNamePrice/ProductNamePrice";
import ProductOverview from "./ProductOverview/ProductOverview";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductRate from "./ProductRate/ProductRate";
import ProductSize from "./ProductSize/ProductSize";
import styles from "./productDetails.module.scss";
import {
  addToBag as addToBagAction,
  removeFromBag as removeFromBagAction,
} from "../../redux/actionCreators/bag";
import { useDispatch } from "react-redux";

const { productInfo, productDetailsContainer, productSpecs } = styles;

const ProductDetails = ({ productData }) => {
  const [selectedSize, setSelectedSize] = useState(
    productData.availableSizes[0].size_id
  );
  const [selectedColor, setSelectedColor] = useState(
    productData?.availableColors[0].color_id
  );
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [isAddedToBag, setIsAddedToBag] = useState(productData.isAddedToBag);
  const dispatch = useDispatch();

  const addToBag = async () => {
    try {
      await addBagItemAPI({
        colorId: selectedColor,
        sizeId: selectedSize,
        productId: productData.product_id,
        quantity: selectedQuantity,
        price: productData.price,
      });
      dispatch(addToBagAction());
      setIsAddedToBag(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromBag = async () => {
    try {
      await deleteBagItemAPI(productData.bagItemInfo.bag_item_id);
      setIsAddedToBag(false);
      dispatch(removeFromBagAction());
    } catch (err) {
      console.log(err);
    }
  };

  const tabs = [
    {
      title: "product overview",
      component: <ProductOverview product={productData} />,
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
          <ProductSize onSizeChange={setSelectedSize} product={productData} />
          <ProductColor
            onColorChange={setSelectedColor}
            product={productData}
          />
          <ProductQuantity onChange={setSelectedQuantity} />
          <ProductActions
            isAddedToBag={isAddedToBag}
            onRemoveFromBag={removeFromBag}
            onAddToBag={addToBag}
          />
        </div>
        <div className={productSpecs}>
          <Tabs tabs={tabs} />
        </div>
      </div>
    )
  );
};

export default ProductDetails;
