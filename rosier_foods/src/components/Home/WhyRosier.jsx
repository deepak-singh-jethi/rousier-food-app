import React from "react";
import fresh from "../../assets/why/fresh.png";
import impact from "../../assets/why/impact.png";
import tradition from "../../assets/why/tradition.png";
import noAddedFlavours from "../../assets/why/noFlavours.png";
import whyRosier1 from "../../assets/why/why1.png";
import whyRosier2 from "../../assets/why/why2.png";

const WhyRosier = () => {
  return (
    <>
      <div className="bg-[#E7926C] md:py-16 py-4">
        <div className="container mx-auto">
          <h1 className="text-center md:text-3xl text-xl font-bold text-white mb-4 md:mb-10">
            Why Rosier?
          </h1>
          <div className="grid md:gap-8 gap-2 grid-cols-4  items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={noAddedFlavours}
                alt="No Added Flavours"
                className="w-10 h-10  md:w-24 md:h-24 mb-4"
              />
              <p className="text-white text-sm">No added flavours</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={fresh}
                alt="Farm Fresh"
                className="w-10 h-10 md:w-24 md:h-24 mb-4"
              />
              <p className="text-white text-sm">Farm Fresh</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={impact}
                alt="Positive Impact"
                className="w-10 h-10  md:w-24 md:h-24 mb-4"
              />
              <p className="text-white text-sm">Positive Impact</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={tradition}
                alt="Rooted in Tradition"
                className="w-10 h-10  md:w-24 md:h-24 mb-4"
              />
              <p className="text-white text-sm">Rooted in Tradition</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] md:py-16 py-4">
        <div className="container mx-auto">
          <h1 className="text-center md:text-3xl text-xl font-bold text-[#E7926C] mb-4 md:mb-10">
            Why People love Rosier
          </h1>
          <div className="grid md:gap-8 gap-2 grid-cols-2 items-center justify-center">
            <img
              src={whyRosier1}
              alt="whyRosier1"
              className="md:w-[90%] w-[80%] mx-auto"
            />

            <img
              src={whyRosier2}
              alt="whyRosier2"
              className="md:w-[90%] w-[80%] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyRosier;
