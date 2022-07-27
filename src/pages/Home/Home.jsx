import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from "./home.module.scss";

const { homePage } = styles;

const Home = () => {
  return (
    <div className={homePage}>
      <Banner />
    </div>
  );
};

export default Home;
