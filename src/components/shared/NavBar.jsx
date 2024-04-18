import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import OfferBanner from "./OfferBanner";
import logo1 from "../../assets/logo1.png";
import cartLogo from "../../assets/cartLogo.png";
import user from "../../assets/user.png";
import burger from "../../assets/burger.png";
import cartActions from "../../store/cart";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isSideNavVisible, setSideNavVisible] = useState(false);
  const [isSubLinksOpen, setIsSubLinksOpen] = useState(false);

  const handleSubLinks = () => {
    setIsSubLinksOpen(!isSubLinksOpen);
  };

  const closeSubLinks = () => {
    setIsSubLinksOpen(false);
  };

  const toggleSideNav = () => {
    setSideNavVisible((prev) => !prev);
  };

  const closeSideNav = () => {
    setSideNavVisible(false);
  };

  return (
    <header className={`${isSideNavVisible ? " fixed  w-full" : ""} z-40`}>
      <OfferBanner />
      <nav className="bg-[#ea9c77] py-4 px-2 md:px-12 lg:px-24 flex items-center justify-between">
        <div className={`lg:hidden block`}>
          <button
            className="bg-transparent"
            onClick={toggleSideNav}
            aria-label="Toggle Side Navigation">
            <img src={burger} alt="Menu" className="h-6" />
          </button>
        </div>
        <div className="flex items-center ml-10">
          <NavLink to="/">
            <img
              src={logo1}
              alt="Logo"
              className="h-16 md:h-20 lg:h-24 cursor-pointer"
              onClick={closeSideNav}
            />
          </NavLink>
        </div>
        <ul className="ml-6 hidden lg:flex gap-8 text-lg md:text-xl font-medium text-[#F9E2D7]">
          <li>
            <NavLink to="/" onClick={closeSubLinks}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourStory" onClick={closeSubLinks}>
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" onClick={closeSubLinks}>
              Shop
            </NavLink>
          </li>
          <li className="relative">
            <button onClick={handleSubLinks}>Blogs</button>
            {isSubLinksOpen && (
              <div className="absolute flex flex-col bg-yellow-200 rounded-b-lg rounded-tr-lg text-black gap-4 px-2 py-1 z-50">
                <NavLink to="/letsCook" onClick={handleSubLinks}>
                  Recipe
                </NavLink>
                <NavLink to="/community" onClick={handleSubLinks}>
                  Community
                </NavLink>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/cart" onClick={closeSubLinks}>
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" onClick={closeSubLinks}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <ul className="flex gap-5 text-xl font-medium text-[#F9E2D7]">
          <li>
            <button className="bg-transparent" aria-label="User Profile">
              <img src={user} alt="User" className="h-6" />
            </button>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="bg-transparent"
              aria-label="Shopping Cart">
              <img src={cartLogo} alt="Cart" className="h-6" />
            </NavLink>
          </li>
        </ul>
      </nav>
      {isSideNavVisible && (
        <div className="fixed left-0 top-[140px] md:top-[150px] w-full h-full bg-gray-800 bg-opacity-80 z-50">
          <div className="absolute top-0 left-0 h-full bg-[#eeb195] w-full p-4">
            <ul className="space-y-4 text-xl text-white ">
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/ourStory"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Our Story
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/shop"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Shop
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/letsCook"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Recipe
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/community"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Community
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/cart"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Cart
                </NavLink>
              </li>
              <li className="cursor-pointer" onClick={closeSideNav}>
                <NavLink
                  to="/contactUs"
                  className="block px-4 py-2 rounded-md hover:bg-gray-200">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
