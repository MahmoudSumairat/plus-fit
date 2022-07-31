import React from "react";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import useHideLayoutComponents from "../hooks/useHideLayoutComponents";
import PageRoutes from "../routes/PageRoutes";
import styles from "./appContainer.module.scss";
const { appContainer } = styles;

const AppContainer = () => {
  const hideLayoutComponents = useHideLayoutComponents();

  return (
    <>
      <Header />
      <div className={!hideLayoutComponents ? appContainer : ""}>
        <PageRoutes />
      </div>
      <Footer />
    </>
  );
};

export default AppContainer;
