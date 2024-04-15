import React from "react";
import cover from "../assets/ourstory/owner.jpeg";
import mission from "../assets/ourstory/mission.webp";
import image1 from "../assets/ourstory/10024.png";
import image2 from "../assets/ourstory/10025.png";
import image3 from "../assets/ourstory/10030.png";

const PromiseData = [
  { image: image1, title: "promise1" },
  { image: image2, title: "promise2" },
  { image: image3, title: "promise3" },
];

const OurStory = () => {
  return (
    <>
      {" "}
      <div className="bg-[#EDE2E3] px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-16">
        <div className="container mx-auto flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={cover}
              alt="owner picture"
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-8 justify-center">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 text-center">
              We are Proudly and Passionately Obsessed with Everything Organic!
            </h1>
            <p className="text-[#8B7F7A] text-md md:text-lg text-center">
              In our daily life routine, we sometimes forget to take stock of
              what we are eating and how we are eating. The choices we make with
              respect to food which affects us and our entire family. So, we
              must consciously invest energy in finding right kinds of foods for
              us and our family to help build their immunity.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#372b2d] mx-auto py-6 lg:py-14">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="text-lg text-gray-300">
              We at Rosier believe in reviving the traditional ways of old
              Bharat.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={mission}
              alt="cow picture"
              className="h-full w-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#EDE2E3] px-4 py-6 md:px-8 md:py-10 lg:px-12 lg:py-16 text-center">
        <h1 className="font-bold lg:text-4xl md:text-2xl text-xl  my-4">
          Our Promise
        </h1>
        <div className="container overflow-hidden overflow-x-scroll flex gap-8 justify-start md:justify-center mx-auto">
          {PromiseData.map((promise, index) => (
            <img
              key={index}
              src={promise.image}
              alt={promise.title}
              className="md:w-[300px] sm:w-[250px] w-[200px] h-auto"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurStory;
