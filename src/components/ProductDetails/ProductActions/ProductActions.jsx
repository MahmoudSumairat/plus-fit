import React from "react";
import Button from "../../core/Button/Button";
import styles from "./productActions.module.scss";
const { productActionsContainer, productAction } = styles;

const ProductActions = () => {
  return (
    <div className={productActionsContainer}>
      <Button className={productAction}>Add to bag</Button>
      <Button className={productAction} buttonType="borderDark">
        buy now
      </Button>
    </div>
  );
};

export default ProductActions;
