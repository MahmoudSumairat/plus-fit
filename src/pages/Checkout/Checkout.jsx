import React from "react";
import BillingAddress from "../../components/BillingAddress/BillingAddress";
import CheckoutList from "../../components/CheckoutList/CheckoutList";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import ShippingMethods from "../../components/ShippingMethods/ShippingMethods";

const Checkout = () => {
  return (
    <div>
      <CheckoutList />
      <BillingAddress />
      <ShippingMethods />
      <PaymentMethods />
    </div>
  );
};

export default Checkout;
