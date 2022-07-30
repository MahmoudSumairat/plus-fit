import React, { useEffect, useState } from "react";
import { getCategoriesForLandingPage } from "../../API/endpoints/categories";
import Button from "../core/Button/Button";
import styles from "./categories.module.scss";
import CategoryBox from "./CategoryBox/CategoryBox";

const { categoriesSection, categoriesRow, categoriesExplore } = styles;

const Categories = () => {
  const [landingPageCategories, setLandingPageCategories] = useState([]);

  useEffect(() => {
    setLandingPageCategories(getCategoriesForLandingPage());
  }, []);

  return (
    <section className={categoriesSection}>
      <div className={categoriesRow}>
        {landingPageCategories.map((category, index) => {
          return <CategoryBox index={index} key={index} category={category} />;
        })}
      </div>
      <div className={categoriesExplore}>
        <Button buttonType="borderDark">EXPLORE MORE</Button>
      </div>
    </section>
  );
};

export default Categories;
