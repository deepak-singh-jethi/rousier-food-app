import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/NavBar";
import Footer from "../components/shared/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default Root;
