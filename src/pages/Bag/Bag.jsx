import React from "react";
import BagList from "../../components/Bag/BagList/BagList";
import BagSidebar from "../../components/Bag/BagSideBar/BagSideBar";
import styles from "./bag.module.scss";

const { bagPage, bagList, bagSidebar, bagTitle } = styles;

const Bag = () => {
  return (
    <div className={bagPage}>
      <h1 className={bagTitle}>Whats in the bag</h1>
      <div className={bagList}>
        <BagList />
      </div>
      <div className={bagSidebar}>
        <BagSidebar />
      </div>
    </div>
  );
};

export default Bag;
