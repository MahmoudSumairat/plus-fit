import React, { useEffect, useState } from "react";
import { getBagItemsAPI } from "../../API/endpoints/bagItems";
import BillingAddress from "../../components/BillingAddress/BillingAddress";
import CheckoutList from "../../components/CheckoutList/CheckoutList";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import ShippingMethods from "../../components/ShippingMethods/ShippingMethods";
import { addAddressAPI } from "../../API/endpoints/addresses";
import { useNavigate } from "react-router";
import { createOrderAPI } from "../../API/endpoints/orders";
import { useDispatch } from "react-redux";
import { resetBagItemsCount } from "../../redux/actionCreators/bag";

const Checkout = () => {
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    fetchBagItems();
  }, []);

  const [addressData, setAddressData] = useState({});
  const [shippingMethod, setShippingMethod] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchBagItems = async () => {
    try {
      setIsLoading(true);
      const {
        data: { data },
      } = await getBagItemsAPI();
      setBagItems(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onAddressDataChange = (addressData) => {
    setAddressData(addressData);
  };

  const onShippingMethodChange = ({ target: { value } }) => {
    setShippingMethod(value);
  };

  const onSubmit = async () => {
    try {
      await addAddressAPI({ ...addressData, shippingMethod });
      const rows = bagItems.map(
        ({ selectedColor, selectedSize, price, quantity, productId }) => ({
          colorId: selectedColor,
          sizeId: selectedSize,
          price,
          quantity,
          productId,
        })
      );
      await createOrderAPI({ rows });
      dispatch(resetBagItemsCount());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <CheckoutList bagItems={bagItems} />
      <BillingAddress
        onErrorsChange={(isValid) => setIsFormValid(isValid)}
        onChange={onAddressDataChange}
      />
      <ShippingMethods onChange={onShippingMethodChange} />
      <PaymentMethods
        isLoading={isLoading}
        isFormValid={isFormValid}
        onClick={onSubmit}
      />
    </div>
  );
};

export default Checkout;
