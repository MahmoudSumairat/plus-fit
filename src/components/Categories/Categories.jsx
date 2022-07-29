import React, { useEffect, useState } from "react";
import { getCategoriesForLandingPage } from "../../API/endpoints/categories";
import styles from "./categories.module.scss";
import CategoryBox from "./CategoryBox/CategoryBox";

const { categoriesSection } = styles;

const Categories = () => {
  const [landingPageCategories, setLandingPageCategories] = useState([]);

  useEffect(() => {
    setLandingPageCategories(getCategoriesForLandingPage());
  }, []);

  return (
    <section className={categoriesSection}>
      {landingPageCategories.map((category) => {
        return <CategoryBox category={category} />;
      })}
    </section>
  );
};

export default Categories;
