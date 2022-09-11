import React, { useEffect, useState } from "react";
import BagItem from "../BagItem/BagItem";
import bagItemsData from "../../../data/bag/bagItems";
import { getColorsAPI, getSizesAPI } from "../../../API/endpoints/lookups";
import { deleteBagItemAPI } from "../../../API/endpoints/bagItems";

const BagList = ({ bagItems: items }) => {
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [bagItems, setBagItems] = useState(items);

  useEffect(() => {
    fetchColors();
    fetchSizes();
  }, []);

  const removeBagItem = async (id) => {
    // do API stuff
    try {
      await deleteBagItemAPI(id);
      const newBagItems = bagItems.filter((item) => item.bagItemId !== id);
      setBagItems(newBagItems);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchColors = async () => {
    try {
      const {
        data: { data },
      } = await getColorsAPI();
      setColors(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSizes = async () => {
    try {
      const {
        data: { data },
      } = await getSizesAPI();
      setSizes(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(colors, sizes);

  return (
    !!colors.length &&
    !!sizes.length && (
      <ul>
        {bagItems.map((item) => {
          return (
            <BagItem
              colors={colors}
              sizes={sizes}
              removeBagItem={removeBagItem}
              item={item}
            />
          );
        })}
      </ul>
    )
  );
};

export default BagList;
