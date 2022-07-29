import categories from "../../data/categories/categories";

const getCategoriesForLandingPage = () => {
  return categories.filter((category) => category.showInLandingPage);
};

export { getCategoriesForLandingPage };
