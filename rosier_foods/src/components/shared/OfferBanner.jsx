import React, { useEffect, useState } from "react";
import { bannerData } from "../../Data/banner";

const OfferBanner = () => {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedBannerIndex((prevIndex) =>
        prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedBannerIndex]);

  return (
    <div className="w-full bg-[#F5DB72] sm:h-16 h-14 text-center">
      <h1 className="text-[#130602] font-medium text:lg sm:text-2xl pt-5 sm:pt-3">
        {bannerData[selectedBannerIndex]}
      </h1>
    </div>
  );
};

export default OfferBanner;
