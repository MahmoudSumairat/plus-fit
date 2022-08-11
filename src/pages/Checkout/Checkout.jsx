import React from "react";
import BillingAddress from "../../components/BillingAddress/BillingAddress";
import CheckoutList from "../../components/CheckoutList/CheckoutList";

const Checkout = () => {
  return (
    <div>
      <CheckoutList />
      <BillingAddress />
    </div>
  );
};

export default Checkout;
