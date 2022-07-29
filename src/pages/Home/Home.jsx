import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import styles from "./home.module.scss";

const { homePage } = styles;

const Home = () => {
  return (
    <div className={homePage}>
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
