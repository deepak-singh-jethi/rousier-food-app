import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import ProductInfoCard from "./ProductInfoCard";
import cartActions from "../../store/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (product.options.length > 1) {
      setIsModalOpen(true);
    } else {
      dispatch(
        cartActions.addSimpleItemToCart({ product: product, selectedOption: 0 })
      );
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen}>
          <ProductInfoCard product={product} handleClose={handleModalClose} />
        </Modal>
      )}
      <div
        key={product.id}
        className="flex-shrink-0 w-[200px] md:w-[250px] bg-white rounded-lg overflow-hidden shadow-md mb-5 flex flex-col">
        <div className="relative h-[200px] md:h-[250px]">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          <div
            className={`absolute bottom-0 right-0 bg-opacity-75 text-white ${
              !product.availability ? "bg-red-500" : "bg-green-400"
            } px-2 py-1 rounded-tl-md`}>
            {product.availability ? "Available" : "Sold Out"}
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
          <div className="flex justify-between">
            <p className={`text-gray-600 `}>
              <span
                className={`font-semibold ${
                  product.options[0].actualPrice !==
                  product.options[0].discountedPrice
                    ? "line-through text-red-600"
                    : "text-green-500"
                }`}>
                Rs: {product.options[0].actualPrice} &#x20B9;
              </span>
            </p>
            {product.options[0].actualPrice !==
              product.options[0].discountedPrice && (
              <p className="text-green-500 font-semibold">
                Rs: {product.options[0].discountedPrice} &#x20B9;
              </p>
            )}
          </div>
        </div>
        <button
          disabled={!product.availability}
          onClick={handleClick}
          className={`mt-auto ${
            product.availability ? "bg-yellow-700" : "bg-yellow-200"
          } w-full text-center py-2 text-white font-bold`}>
          {product.availability
            ? product.options.length > 1
              ? "Choose options"
              : "Add to Cart"
            : "Sold Out"}
        </button>
      </div>
    </>
  );
};

export default ProductCard;
