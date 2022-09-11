import React, { useEffect, useState } from "react";
import { getBagItemsAPI } from "../../API/endpoints/bagItems";
import BagList from "../../components/Bag/BagList/BagList";
import BagSidebar from "../../components/Bag/BagSideBar/BagSideBar";
import styles from "./bag.module.scss";

const { bagPage, bagList, bagSidebar, bagTitle, bagEmpty } = styles;

const Bag = () => {
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    fetchBagItems();
  }, []);

  const fetchBagItems = async () => {
    try {
      const {
        data: { data },
      } = await getBagItemsAPI();
      setBagItems(data);
    } catch (err) {}
  };

  return (
    <div className={bagPage}>
      {!!bagItems.length ? (
        <>
          <h1 className={bagTitle}>Whats in the bag</h1>
          <div className={bagList}>
            <BagList fetchBagItems={fetchBagItems} bagItems={bagItems} />
          </div>
          <div className={bagSidebar}>
            <BagSidebar bagItems={bagItems} />
          </div>
        </>
      ) : (
        <p className={bagEmpty}>Your bag is empty!</p>
      )}
    </div>
  );
};

export default Bag;
