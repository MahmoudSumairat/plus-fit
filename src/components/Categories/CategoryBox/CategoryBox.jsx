import React from "react";
import { Link } from "react-router-dom";
import Button from "../../core/Button/Button";
import styles from "./categoryBox.module.scss";

const {
  categoryBox,
  categoryImage,
  oddCategory,
  evenCategory,
  categoryTitle,
  categoryButton,
} = styles;

const CategoryBox = ({ category, index }) => {
  return (
    <div
      className={`${categoryBox} ${
        index % 2 === 0 ? evenCategory : oddCategory
      }  `}
    >
      <p className={categoryTitle}>{category.title}</p>
      <img
        className={categoryImage}
        src={category.imageUrl}
        alt={category.title}
      />
      <Link to={category.key}>
        <Button className={categoryButton} buttonType="borderLight">
          shop now
        </Button>
      </Link>
    </div>
  );
};

export default CategoryBox;
