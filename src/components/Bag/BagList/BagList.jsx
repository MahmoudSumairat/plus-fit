import React, { useState } from "react";
import BagItem from "../BagItem/BagItem";
import styles from "./bagList.module.scss";
import bagItemsData from "../../../data/bag/bagItems";

const { bagItemList } = styles;

const BagList = () => {
  const [bagItems, setBagItems] = useState(bagItemsData);

  const removeBagItem = (id) => {
    // do API stuff
    const newBagItems = [...bagItems].filter((item) => item.id !== id);
    setBagItems(newBagItems);
  };

  return (
    <ul className={bagItemList}>
      {bagItems.map((item) => {
        return <BagItem removeBagItem={removeBagItem} item={item} />;
      })}
    </ul>
  );
};

export default BagList;
