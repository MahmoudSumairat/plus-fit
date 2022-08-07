import React from "react";
import Button from "../../../core/Button/Button";
import styles from "./noReviews.module.scss";

const {
  noReviewsContainer,
  noReviewsTitle,
  noReviewsDescription,
  noReviewsButton,
} = styles;
const NoReviews = () => {
  return (
    <div className={noReviewsContainer}>
      <h4 className={noReviewsTitle}>there are no current reviews</h4>
      <p className={noReviewsDescription}>
        no users submitted their reviews for this product yet, be the first one
        who adds it
      </p>
      <Button className={noReviewsButton}>Add your review</Button>
    </div>
  );
};

export default NoReviews;
