import React, { useState } from "react";
import { Heart } from "../../../svg";
import styles from "./addToWishList.module.scss";
const { addToWishListText, addToWishListContainer, wishlistAdded } = styles;

const AddToWishList = ({ product: { addedToWishList } }) => {
  const [added, setAdded] = useState(addedToWishList);

  const toggleAdd = () => {
    setAdded(!added);
  };

  return (
    <button
      onClick={toggleAdd}
      className={`${addToWishListContainer} ${added ? wishlistAdded : ""} `}
    >
      <Heart />
      <span className={addToWishListText}>Add to wishlist</span>
    </button>
  );
};

export default AddToWishList;
