import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Recipe = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes);
  const selectedRecipe = recipes.find((data) => data.id === parseInt(id));

  if (!selectedRecipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="md:text-6xl text-4xl text-gray-800 font-bold">
          Recipe not found
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="relative">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            className="w-full h-64 object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white uppercase tracking-wide text-center">
              {selectedRecipe.title}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-6">{selectedRecipe.description}</p>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Ingredients:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Instructions:
            </h2>
            <ol className="list-decimal list-inside text-gray-700">
              {selectedRecipe.instructions.map((instruction, index) => (
                <li key={index} className="mb-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Conclusion:
            </h2>
            <p className="text-gray-700">{selectedRecipe.conclusion}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Variations:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {selectedRecipe.variations.map((variation, index) => (
                <li key={index} className="mb-2">
                  {variation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Link
          to="/letsCook"
          className="mt-4 text-blue-600 underline text-center font-bold text-3xl ">
          View All Recipies
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
