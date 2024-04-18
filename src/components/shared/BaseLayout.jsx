import React from "react";
import CommunityCard from "./CommuintyCard";
import RecipeCard from "./RecipeCard";
import letcookCover from "../../assets/letscook.jpeg";
import communityCover from "../../assets/communityCover.jpeg";

const BaseLayout = ({ mainTitle, subTitle, array, cardType }) => {
  return (
    <main className="bg-[#fff] pb-10">
      <div className="relative overflow-hidden ">
        <img
          className="inset-0 w-full h-[200px] md:h-[600px] object-cover"
          src={cardType === "community" ? communityCover : letcookCover}
          alt="Community Cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-[#EA9B76] font-bold text-center">
            {mainTitle}
          </h1>
        </div>
      </div>

      <div className="container mx-auto w-full my-14 md:my-20">
        <h2 className="text-2xl md:text-3xl text-center font-bold font-serif text-[#000]">
          {subTitle}
          <hr className="w-1/2 mx-auto mt-2 bg-[#EA9B76] mb-10" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mx-auto">
          {array.map((item, index) => {
            return cardType === "community" ? (
              <CommunityCard blog={item} key={item.id} />
            ) : (
              <RecipeCard recipe={item} key={item.title} />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default BaseLayout;
