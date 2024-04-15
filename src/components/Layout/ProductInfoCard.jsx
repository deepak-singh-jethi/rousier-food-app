import React, { useState } from "react";

const ProductInfoCard = ({ product, handleClose }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    if (operation === "increment") {
      setQuantity(quantity + 1);
    } else if (operation === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden "
      style={{ scrollbarWidth: "none" }}>
      {/* Name and Close Button */}
      <div className="md:p-6 p-1 flex items-center justify-between sm:bg-gray-100">
        <h3 className="text-lg hidden md:block font-semibold text-gray-800">
          {product.name}
        </h3>
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 hover:bg-red-400 focus:outline-none"
          onClick={handleClose}>
          &#10060;
        </button>
      </div>
      {/* Product Image and Info Area */}
      <div className="sm:p-6 py-2 px-3 flex flex-col md:flex-row">
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
        />
        {/* Info Main Area */}
        <div className="md:ml-6 flex flex-col justify-between">
          <div>
            <h2 className="sm:text-xl text-lg font-bold">{product.name}</h2>
            {/* Price Area */}
            <div className="flex items-center mt-2">
              <span
                className={`text-lg font-semibold ${
                  product.actualPrice !== product.discountedPrice
                    ? "text-red-600 line-through"
                    : "text-green-600"
                }`}>
                Rs. {product.actualPrice}
              </span>
              {product.actualPrice !== product.discountedPrice && (
                <span className="text-lg font-semibold ml-2 text-green-600">
                  Rs. {product.discountedPrice}
                </span>
              )}
              <span
                className={`text-sm font-semibold ml-4 px-2 py-1 rounded ${
                  product.availability
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}>
                {product.availability ? "Available" : "Sold Out"}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Tax included. Shipping calculated at checkout.
            </p>
            {/* Size Area */}
            <div className="mt-4">
              <p className="text-sm font-semibold">Size</p>
              {/* Size Options */}
              <div className="flex mt-1">
                {product.options.map((option, index) => (
                  <button
                    key={index}
                    className={`mr-2 px-3 py-1 text-sm font-semibold rounded-full focus:outline-none ${
                      selectedOption === index
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                    onClick={() => handleOptionClick(index)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Quantity Area */}
          <div className="mt-4">
            <p className="text-sm font-semibold">Quantity</p>
            <div className="flex items-center mt-1">
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l focus:outline-none"
                onClick={() => handleQuantityChange("decrement")}>
                -
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-sm font-semibold">
                {quantity}
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r focus:outline-none"
                onClick={() => handleQuantityChange("increment")}>
                +
              </button>
            </div>
          </div>
          {/* Add to Cart Button */}
          <button
            className={`mt-4 py-2 bg-blue-500 ${
              product.availability ? "bg-blue-500" : "bg-blue-200"
            } text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none`}>
            {product.availability ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;