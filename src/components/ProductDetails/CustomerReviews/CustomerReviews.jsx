import React, { useState } from "react";
import Button from "../../core/Button/Button";
import CreateReview from "./CreateReview/CreateReview";
import styles from "./customerReviews.module.scss";
import NoReviews from "./NoReviews/NoReviews";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import useUserData from "../../../hooks/useUserData";
import { addReviewAPI } from "../../../API/endpoints/reviews";
const {
  reviewsContainer,
  reviewsHeader,
  reviewsList,

  addReviewButton,
} = styles;

const CustomerReviews = ({
  product: { reviews: productReviews, product_id },
}) => {
  const [createMode, setCreateMode] = useState(false);
  const [reviews, setReviews] = useState(productReviews);
  const [isLoading, setIsLoading] = useState(false);
  const { user_id } = useUserData();

  const isReviewsByMe = !!productReviews.find(
    (review) => review.user_id === user_id
  );

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await addReviewAPI({ ...data, productId: product_id });
      setIsLoading(false);
      setReviews([...reviews, data]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={reviewsContainer}>
      {!!reviews.length && !createMode && (
        <>
          {!isReviewsByMe && (
            <div className={reviewsHeader}>
              <Button
                onClick={() => setCreateMode(true)}
                className={addReviewButton}
              >
                add your review
              </Button>
            </div>
          )}
          <ul className={reviewsList}>
            {reviews.map((review) => {
              return <ReviewsItem key={review.content} review={review} />;
            })}
          </ul>
        </>
      )}
      {!reviews.length && (
        <NoReviews onCreateClick={() => setCreateMode(true)} />
      )}

      {createMode && (
        <CreateReview
          isLoading={isLoading}
          onSubmit={onSubmit}
          onCancel={() => setCreateMode(false)}
        />
      )}
    </div>
  );
};

export default CustomerReviews;
