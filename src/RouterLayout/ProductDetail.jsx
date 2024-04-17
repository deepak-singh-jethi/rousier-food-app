import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartActions from "../store/cart";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Product not found</h1>
        <Link to="/shop" className="text-blue-500 hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelection = (index) => {
    setSelectedSizeIndex(index);
    setQuantity(1); // Reset quantity when size changes
  };

  const addToCart = () => {
    if (product.options.length > 1) {
      dispatch(
        cartActions.addProductWithOptionToCart({
          product: product,
          quantity: quantity,
          selectedOption: selectedSizeIndex,
        })
      );
    } else {
      dispatch(
        cartActions.addSimpleItemToCart({
          product: product,
          quantity: quantity,
          selectedOption: selectedSizeIndex,
        })
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg mb-4"
          />
        </div>
        {/* details */}
        <div className="flex flex-col">
          {/* name description and bebifits */}
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Key Benefits:</h2>
              <ul className="list-disc list-inside text-gray-700">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Size Options:</h2>
              <div className="flex flex-wrap mb-4">
                {product.options.map((option, index) => (
                  <div
                    key={index}
                    className={`${
                      index === selectedSizeIndex
                        ? "bg-blue-200"
                        : "bg-gray-100"
                    } rounded-md p-4 mr-4 mb-4 ${
                      product.availability
                        ? "cursor-pointer opacity-100 "
                        : "cursor-not-allowed opacity-40"
                    }`}
                    onClick={() => handleSizeSelection(index)}>
                    <p className="text-lg font-semibold">{option.size}</p>
                    <p className="text-lg text-gray-700">
                      Price: ${option.discountedPrice}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* quantity and add to cart button */}

          <div className="flex items-center sm:justify-start justify-center ">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={decreaseQuantity}>
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={increaseQuantity}>
              +
            </button>
          </div>

          <div className="mt-4 text-center sm:text-left ">
            <button
              className={`${
                product.availability
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400"
              } text-white font-bold py-2 px-6 rounded ml-auto`}
              onClick={addToCart}
              disabled={!product.availability}>
              {product.availability ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
          {/* back to shop button */}
          <Link
            to="/shop"
            className="text-blue-500 hover:underline inline-block mt-4">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
