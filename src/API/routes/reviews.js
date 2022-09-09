import { REVIEWS } from "../baseURLs";

export const addReviewRoute = () => `${REVIEWS}`;
export const getProductReviewsRoute = (productId) => `${REVIEWS}/${productId}`;
export const updateReviewRoute = (reviewId) => `${REVIEWS}/${reviewId}`;
