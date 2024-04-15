import React from "react";

import BottomFooter from "./footer_components/BottomFooter";
import TopFooter from "./footer_components/TopFooter";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#ea9c77] py-8 md:py-12 md:px-30 ">
        <div className="container mx-auto px-4 md:px-8">
          <TopFooter />
          <BottomFooter />
        </div>
      </footer>
    </>
  );
};

export default Footer;
