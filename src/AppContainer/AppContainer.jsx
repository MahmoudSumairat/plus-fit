import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBagItemsCountAPI } from "../API/endpoints/bagItems";
import { reportVisitAPI } from "../API/endpoints/visits";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import { getCookie, setCookie } from "../helpers/cookies";
import useHideLayoutComponents from "../hooks/useHideLayoutComponents";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
import { setBagItemsCount } from "../redux/actionCreators/bag";
import PageRoutes from "../routes/PageRoutes";
import styles from "./appContainer.module.scss";
const { appContainer } = styles;

const AppContainer = () => {
  const hideLayoutComponents = useHideLayoutComponents();
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      fetchBagItemsCount();
    }
    reportVisit();
  }, []);

  const fetchBagItemsCount = async () => {
    try {
      const {
        data: { data },
      } = await getBagItemsCountAPI();
      dispatch(setBagItemsCount(data));
    } catch (err) {
      console.log(err);
    }
  };

  const reportVisit = async () => {
    if (!getCookie("isVisited")) {
      setCookie("isVisited", "true");
      await reportVisitAPI();
    }
  };

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
