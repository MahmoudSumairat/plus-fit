import React, { useEffect, useState } from "react";
import BagItem from "../BagItem/BagItem";
import bagItemsData from "../../../data/bag/bagItems";
import { getColorsAPI, getSizesAPI } from "../../../API/endpoints/lookups";
import {
  deleteBagItemAPI,
  updateBagItemAPI,
} from "../../../API/endpoints/bagItems";

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

  const updateBagItem = async (
    updateField,
    updateValue,
    bagItemId,
    productId
  ) => {
    try {
      await updateBagItemAPI(
        { updateField, updateValue, productId },
        bagItemId
      );
      const bagItemPropsMap = {
        colorId: "selectedColor",
        sizeId: "selectedSize",
        quantity: "quantity",
      };
      const bagItemIndex = bagItems.findIndex(
        (item) => item.bagItemId === bagItemId
      );
      const newBagItems = [...bagItems];
      newBagItems[bagItemIndex][bagItemPropsMap[updateField]] = updateValue;
      setBagItems(newBagItems);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    !!bagItems.length && (
      <ul>
        {bagItems.map((item) => {
          return (
            <BagItem
              removeBagItem={removeBagItem}
              item={item}
              onColorChange={(value, productId, bagItemId) =>
                updateBagItem("colorId", value, bagItemId, productId)
              }
              onSizeChange={(value, productId, bagItemId) =>
                updateBagItem("sizeId", value, bagItemId, productId)
              }
              onQuantityChange={(value, productId, bagItemId) =>
                updateBagItem("quantity", value, bagItemId, productId)
              }
            />
          );
        })}
      </ul>
    )
  );
};

export default BagList;
