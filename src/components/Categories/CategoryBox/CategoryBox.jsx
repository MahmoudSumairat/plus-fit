import React from "react";
import styles from "./categoryBox.module.scss";

const { categoryBox } = styles;

const CategoryBox = ({ category }) => {
  return (
    <div className={categoryBox}>
      <img src={require(category.imageUrl).default} />
    </div>
  );
};

export default CategoryBox;
