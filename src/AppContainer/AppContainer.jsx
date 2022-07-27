import React from "react";
import Header from "../components/Layout/Header/Header";
import PageRoutes from "../routes/PageRoutes";
import styles from "./appContainer.module.scss";
const { appContainer } = styles;

const AppContainer = () => {
  return (
    <>
      <Header />
      <div className={appContainer}>
        <PageRoutes />
      </div>
    </>
  );
};

export default AppContainer;
