import React, { useState } from "react";
import Button from "../../../core/Button/Button";
import Input from "../../../core/Input/Input";
import RateProduct from "../../../RateProduct/RateProduct";
import styles from "./createReview.module.scss";

const { createReviewButton, createReviewActions, createReviewTitle } = styles;

const CreateReview = ({ onSubmit, onCancel }) => {
  const [reviewData, setReviewData] = useState({ rate: 0, review: "" });

  const onReviewChange = ({ target: { value } }) => {
    const newReviewData = { ...reviewData };
    newReviewData.review = value;
    setReviewData(newReviewData);
  };

  const onReviewRateChange = (value) => {
    const newReviewData = { ...reviewData };
    newReviewData.rate = value;
    setReviewData(newReviewData);
  };

  return (
    <div>
      <h4 className={createReviewTitle}>Create Review</h4>
      <Input
        multiLine
        name="review"
        placeholder="enter your review"
        label="review"
        onChange={onReviewChange}
      />
      <RateProduct onChange={onReviewRateChange} />
      <div className={createReviewActions}>
        <Button
          disabled={!reviewData.review || !reviewData.rate}
          onSubmit={() => onSubmit(reviewData)}
          className={createReviewButton}
        >
          Submit review
        </Button>
        <Button
          onClick={onCancel}
          buttonType="borderDark"
          className={createReviewButton}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CreateReview;
