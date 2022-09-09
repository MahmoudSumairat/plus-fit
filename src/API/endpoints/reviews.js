import http from "../../http/http";
import {
  addReviewRoute,
  getProductReviewsRoute,
  updateReviewRoute,
} from "../routes/reviews";

export const addReviewAPI = (reviewData) => {
  return http.post(addReviewRoute(), reviewData);
};

export const getProductReviewsAPI = (productId) => {
  return http.get(getProductReviewsRoute(productId));
};

export const updateReviewAPI = (reviewData, reviewId) => {
  return http.put(updateReviewRoute(reviewId), reviewData);
};
