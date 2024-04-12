import React, { useState } from "react";
import OfferBanner from "./OfferBanner";
import logo1 from "../../assets/logo1.png";
import cartLogo from "../../assets/cartLogo.png";
import user from "../../assets/user.png";
import burger from "../../assets/burger.png";

const NavBar = () => {
  const [isSideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible((prev) => !prev);
  };

  const closeSideNav = () => {
    setSideNavVisible(false);
  };

  return (
    <header>
      <OfferBanner />
      <nav className="bg-[#ea9c77] py-4 px-2 md:px-12 lg:px-24 flex items-center justify-between">
        <div className="lg:hidden block">
          <button
            className="bg-transparent"
            onClick={toggleSideNav}
            aria-label="Toggle Side Navigation">
            <img src={burger} alt="Menu" className="h-6" />
          </button>
        </div>
        <div className="flex items-center ml-10">
          <img
            src={logo1}
            alt="Logo"
            className="h-16 md:h-20 lg:h-24 cursor-pointer"
            onClick={closeSideNav}
          />
        </div>
        <ul className="ml-6 hidden lg:flex gap-8 text-lg md:text-xl font-medium text-[#F9E2D7]">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">Our Story</li>
          <li className="hover:text-white cursor-pointer">Shop</li>
          <li className="hover:text-white cursor-pointer">Blogs</li>
          <li className="hover:text-white cursor-pointer">Track Order</li>
          <li className="hover:text-white cursor-pointer">Contact Us</li>
        </ul>
        <ul className="flex gap-5 text-xl font-medium text-[#F9E2D7]">
          <li className="hover:text-white cursor-pointer">
            <button className="bg-transparent" aria-label="User Profile">
              <img src={user} alt="User" className="h-6" />
            </button>
          </li>
          <li className="cursor-pointer">
            <button className="bg-transparent" aria-label="Shopping Cart">
              <img src={cartLogo} alt="Cart" className="h-6" />
            </button>
          </li>
        </ul>
      </nav>
      {isSideNavVisible && (
        <div className="fixed left-0 top-[150px] md:top-[170px] w-full h-full bg-gray-800 bg-opacity-80 z-50">
          <div className="absolute top-0 left-0 h-full bg-[#eeb195] w-full p-4">
            <ul className="space-y-4 text-xl text-white ">
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#home"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Home
                </a>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#our-story"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Our Story
                </a>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#shop"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Shop
                </a>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#blogs"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Blogs
                </a>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#track-order"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Track Order
                </a>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <a
                  href="#contact-us"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
