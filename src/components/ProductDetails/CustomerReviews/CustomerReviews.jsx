import React, { useState } from "react";
import Button from "../../core/Button/Button";
import CreateReview from "./CreateReview/CreateReview";
import styles from "./customerReviews.module.scss";
import NoReviews from "./NoReviews/NoReviews";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
const {
  reviewsContainer,
  reviewsHeader,
  reviewsList,

  addReviewButton,
} = styles;

const CustomerReviews = ({ product: { reviews } }) => {
  const [createMode, setCreateMode] = useState(false);

  return (
    <div className={reviewsContainer}>
      {!!reviews.length && !createMode && (
        <>
          <div className={reviewsHeader}>
            <Button
              onClick={() => setCreateMode(true)}
              className={addReviewButton}
            >
              add your review
            </Button>
          </div>
          <ul className={reviewsList}>
            {reviews.map((review) => {
              return <ReviewsItem review={review} />;
            })}
          </ul>
        </>
      )}
      {!reviews.length && (
        <NoReviews onCreateClick={() => setCreateMode(true)} />
      )}

      {createMode && (
        <CreateReview
          onSubmit={(data) => console.log(data)}
          onCancel={() => setCreateMode(false)}
        />
      )}
    </div>
  );
};

export default CustomerReviews;
