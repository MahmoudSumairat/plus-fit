import React, { useEffect, useState } from "react";
import { getBagItemsAPI } from "../../API/endpoints/bagItems";
import BillingAddress from "../../components/BillingAddress/BillingAddress";
import CheckoutList from "../../components/CheckoutList/CheckoutList";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import ShippingMethods from "../../components/ShippingMethods/ShippingMethods";
import { addAddressAPI } from "../../API/endpoints/addresses";
import { useNavigate } from "react-router";

const Checkout = () => {
  const [bagItems, setBagItems] = useState([]);
  useEffect(() => {
    fetchBagItems();
  }, []);

  const [addressData, setAddressData] = useState({});
  const [shippingMethod, setShippingMethod] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const fetchBagItems = async () => {
    try {
      const {
        data: { data },
      } = await getBagItemsAPI();
      setBagItems(data);
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
      <PaymentMethods isFormValid={isFormValid} onClick={onSubmit} />
    </div>
  );
};

export default Checkout;
