import React from "react";
import Button from "../../core/Button/Button";
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
  return (
    <div className={reviewsContainer}>
      {!!reviews.length && (
        <>
          <div className={reviewsHeader}>
            <Button className={addReviewButton}>add your review</Button>
          </div>
          <ul className={reviewsList}>
            {reviews.map((review) => {
              return <ReviewsItem review={review} />;
            })}
          </ul>
        </>
      )}
      {!reviews.length && <NoReviews />}
    </div>
  );
};

export default CustomerReviews;
