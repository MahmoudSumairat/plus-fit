import React from "react";
import Header from "../components/Layout/Header/Header";
import PageRoutes from "../routes/PageRoutes";
import styles from "./appContainer.module.scss";

const AppContainer = () => {
  return (
    <>
      <Header />
      <PageRoutes />
    </>
  );
};

export default AppContainer;
