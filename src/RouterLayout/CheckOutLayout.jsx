import React, { useState } from "react";
import { useSelector } from "react-redux";
import Auth from "./Auth";
import Check from "../components/Layout/CheckOutPage";

const CheckoutPage = () => {
  const auth = useSelector((state) => state.auth);

  if (!auth.token) {
    return (
      <>
        <div className="my-5 w-full flex justify-center items-center">
          <h1 className="text-xl sm:text-2xl font-thin text-gray-600 border-b-2">
            Please login First to Checkout!
          </h1>
        </div>
        <Auth fromCheckoutPage />
      </>
    );
  }

  return <Check></Check>;
};

export default CheckoutPage;
