import React from "react";
import logo from "../../../assets/logo1.png";

const TopFooter = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-center md:justify-around items-center space-y-4 md:space-y-0 md:space-x-8">
      {/* Logo Section */}
      <div className="md:w-1/5">
        <img
          src={logo}
          alt="logo"
          className="h-auto max-h-28 md:max-h-30 cursor-pointer"
        />
      </div>
      {/* Text Section */}
      <div className=" md:text-left flex-1 ">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
          “We are reviving the traditional ways of old Bharat”
        </h1>
      </div>
      {/* Subscription Section */}
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        <h1 className="text-white mb-2 text-xl  font-bold">
          Subscribe to our Newsletter
        </h1>
        <div className="flex items-center">
          <input
            id="email"
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 w-full md:w-auto rounded-md focus:outline-none focus:ring-2 focus:ring-white border border-gray-300"
          />
          <button className="text-white  rounded-lg ml-2 transitiotext-white text-semibold text-lg ease-in-out">
            &#9993;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
