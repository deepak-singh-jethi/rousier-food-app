import React from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const Root = () => {
  const cart = useSelector((state) => state.cart);
  const { items, isCartOpen } = cart;
  return (
    <div>
      <NavBar />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Root;
