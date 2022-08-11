import React from "react";
import BagItem from "../BagItem/BagItem";
import styles from "./bagList.module.scss";
import bagItems from "../../../data/bag/bagItems";

const { bagItemList } = styles;

const BagList = () => {
  return (
    <ul className={bagItemList}>
      {bagItems.map((item) => {
        return <BagItem item={item} />;
      })}
    </ul>
  );
};

export default BagList;
