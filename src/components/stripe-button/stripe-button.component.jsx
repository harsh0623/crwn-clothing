import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForSale = price * 100;
  const publishableKey =
    "pk_test_51JJchpSBrbQFELpTCPikGrltaDlv0YTmXPEvkuCxDN9zE8X3d7YZuPgvP1G1kGFXxmJnUo9AECphHYqepRHqyk1300RFYI5uAJ";

  const OnToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForSale}
      panelLabel="Pay Now"
      token={OnToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;