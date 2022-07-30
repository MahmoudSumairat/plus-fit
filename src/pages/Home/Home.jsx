import React from "react";
import Banner from "../../components/Banner/Banner";
import BecomeMember from "../../components/BecomeMember/BecomeMember";
import BestSellers from "../../components/BestSellers/BestSellers";
import Categories from "../../components/Categories/Categories";
import Sale from "../../components/Sale/Sale";
import styles from "./home.module.scss";

const { homePage } = styles;

const Home = () => {
  return (
    <div className={homePage}>
      <Banner />
      <Categories />
      <Sale />
      <BestSellers />
      <BecomeMember />
    </div>
  );
};

export default Home;
