import React from "react";
import Button from "../../core/Button/Button";
import styles from "./productActions.module.scss";
const { productActionsContainer, productAction } = styles;

const ProductActions = ({
  onAddToBag = () => {},
  isAddedToBag,
  onRemoveFromBag = () => {},
  isLoading,
}) => {
  return (
    <div className={productActionsContainer}>
      <Button
        isLoading={isLoading}
        onClick={isAddedToBag ? onRemoveFromBag : onAddToBag}
        color={isAddedToBag ? "borderDark" : "normal"}
        className={productAction}
      >
        {isAddedToBag ? "Remove From Bag" : "Add to bag"}
      </Button>
    </div>
  );
};

export default ProductActions;
