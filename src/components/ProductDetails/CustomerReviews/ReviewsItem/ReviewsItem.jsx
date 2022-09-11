import React from "react";
import getCounterArr from "../../../../helpers/getCounterArray";
import { StarFill } from "../../../../svg";
import styles from "./reviewsItem.module.scss";

const { reviewsItem, reviewUser, reviewContent, reviewRate } = styles;

const ReviewsItem = ({ review }) => {
  return (
    <div className={reviewsItem}>
      <span className={reviewUser}>
        {review.first_name} {review.last_name}
      </span>
      <span className={reviewRate}>
        {getCounterArr(Math.ceil(review.rate / review.rates_count)).map(
          (item) => {
            return <StarFill key={item} />;
          }
        )}
        <span>{review.rate / review.rates_count}</span>
      </span>
      <p className={reviewContent}> {review.content} </p>
    </div>
  );
};

export default ReviewsItem;
