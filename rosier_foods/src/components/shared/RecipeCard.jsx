import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div
      key={recipe.title}
      className="bg-[#f8e693] rounded-lg w-[80%] sm:w-[100%] shadow-md hover:shadow-xl transition duration-300 ml-10 sm:ml-0">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          {recipe.title}
        </h2>
        <a
          href="#"
          className="block text-blue-500 font-semibold hover:underline">
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
