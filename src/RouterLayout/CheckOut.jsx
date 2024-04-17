import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

const CheckOut = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <>
        <div className="my-5 w-full flex justify-center items-center">
          <h1 className="text-xl sm:text-2xl  font-thin text-gray-600 border-b-2">
            Please login First to Checkout!
          </h1>
        </div>
        <Auth />
      </>
    );
  }

  return <div>CheckOut</div>;
};

export default CheckOut;
