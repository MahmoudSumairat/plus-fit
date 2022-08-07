import React from "react";
import getCounterArr from "../../../../helpers/getCounterArray";
import { StarFill } from "../../../../svg";
import styles from "./reviewsItem.module.scss";

const { reviewsItem, reviewUser, reviewContent, reviewRate } = styles;

const ReviewsItem = ({ review }) => {
  return (
    <div className={reviewsItem}>
      <span className={reviewUser}>{review.username}</span>
      <span className={reviewRate}>
        {getCounterArr(review.rate).map(() => {
          return <StarFill />;
        })}
        <span>{review.rate}</span>
      </span>
      <p className={reviewContent}> {review.content} </p>
    </div>
  );
};

export default ReviewsItem;
