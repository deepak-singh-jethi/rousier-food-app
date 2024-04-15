import React, { useEffect, useState } from "react";
import { heroData } from "../../Data/heroData";

const HeroArea = () => {
  const [selectedIndex, setSeletedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeletedIndex((selectedIndex + 1) % heroData.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedIndex]);

  const handleImage = (direction) => {
    if (direction === "next") {
      setSeletedIndex((selectedIndex + 1) % heroData.length);
    } else {
      setSeletedIndex((selectedIndex - 1 + heroData.length) % heroData.length);
    }
  };

  return (
    <div>
      <img
        src={heroData[selectedIndex].image}
        alt=""
        style={{ maxWidth: "100%" }}
      />
      {/* buttons for next and prev */}
      <div className="flex justify-center gap-11">
        <button
          onClick={() => handleImage("prev")}
          className="md:text-4xl text-xl">
          &larr;
        </button>
        <button
          onClick={() => handleImage("next")}
          className="md:text-4xl text-xl">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HeroArea;
