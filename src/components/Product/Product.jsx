import React, { useState } from "react";
import Button from "../core/Button/Button";
import styles from "./product.module.scss";
import { StarFill } from "../../svg";
import { useNavigate } from "react-router";
import calculatePrice from "../../helpers/calculatePrice";
import { useDispatch } from "react-redux";
import { addToBag } from "../../redux/actionCreators/bag";

const {
  productBox,
  productImage,
  productTitle,
  productOldPrice,
  productNewPrice,
  productRating,
  productButton,
  productInfo,
} = styles;

const Product = ({ product, className = "" }) => {
  const { imgUrl, title, price, sale, rate } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addedToBag, setAddedToBag] = useState(product.addedToBag);

  const getRatingStars = () => {
    const counterArr = [];
    const counter = Math.ceil(rate);
    for (let i = 0; i < counter; i++) {
      counterArr.push(i);
    }
    return counterArr.map((item, index) => {
      return <StarFill key={index} />;
    });
  };

  const onProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const addRemoveBag = (e) => {
    //do api stuff
    e.stopPropagation();
    dispatch(addToBag());
    setAddedToBag(true);
  };

  return (
    <div onClick={onProductClick} className={`${productBox} ${className} `}>
      <img alt={title} src={imgUrl} className={productImage} />
      <div className={productInfo}>
        <h6 className={productTitle}>{title}</h6>
        <span className={sale ? productOldPrice : productNewPrice}>
          ${calculatePrice(true, sale, price)}
        </span>
        <span className={productRating}>
          {getRatingStars()} <span>{rate}</span>{" "}
        </span>
        {!!sale && (
          <span className={productNewPrice}>
            ${calculatePrice(false, sale, price)}
          </span>
        )}
      </div>
      <Button
        onClick={addRemoveBag}
        buttonType={addedToBag ? "borderDark" : "normal"}
        className={productButton}
      >
        {addedToBag ? "remove from bag" : "add to bag"}
      </Button>
    </div>
  );
};

export default Product;
