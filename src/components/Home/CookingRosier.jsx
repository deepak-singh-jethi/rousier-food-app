import React, { useState } from "react";
import { recipies } from "../../Data/Recipies";
import RecipeCard from "../Layout/RecipeCard";
import { NavLink } from "react-router-dom";

const CookingRosier = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([0, 1, 2]);
  const handlePrevClick = () => {
    // remove first index value and add a new index value
    // if first element is lastIndex value add 0
    setSelectedIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes.shift();
      const lastValue = newIndexes[newIndexes.length - 1];
      if (lastValue === recipies.length - 1) {
        newIndexes.push(0);
      } else {
        newIndexes.push(lastValue + 1);
      }

      return newIndexes;
    });
  };
  const handleNextClick = () => {
    setSelectedIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      const firstValue = newIndexes[0];
      newIndexes.pop();
      if (firstValue === 0) {
        newIndexes.unshift(recipies.length - 1);
      } else {
        newIndexes.unshift(firstValue - 1);
      }
      return newIndexes;
    });
  };

  return (
    <div className="py-8 lg:py-16 bg-yellow-100 text-gray-800">
      <div className="container mx-auto text-center">
        <h1 className="text-xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 lg:mb-10">
          Cooking with Rosier
        </h1>
        <p className="text-md md:text-xl max-w-3xl mx-auto mb-8 lg:mb-12">
          Dive into our collection of delicious and clean recipes made with
          Rosier Farm products. Crafted with love by us and you!
        </p>
      </div>
      <div className="md:container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 mx-auto">
        {selectedIndexes.map((index) => {
          const recipe = recipies[index];
          return <RecipeCard recipe={recipe} key={recipe.title} />;
        })}
      </div>
      <div className="container flex md:mt-8 mt-4 justify-center mx-auto">
        <button
          className="md:w-14 md:h-14 w-12 h-12 rounded-full bg-white hover:bg-slate-400 "
          onClick={handlePrevClick}>
          &#8249;
        </button>
        <button
          className="md:w-14 md:h-14 w-12 h-12 rounded-full bg-white hover:bg-slate-400  ml-6"
          onClick={handleNextClick}>
          &#8250;
        </button>
      </div>
      <div className="text-center md:mt-10 mt-4">
        <NavLink to="/letsCook">
          <button className="bg-[#E7926C] px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white">
            View all
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CookingRosier;
