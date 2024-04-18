import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../../Data/productsData";
import ProductCard from "../shared/ProductCard";

const BestSeller = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex justify-between md:pt-20 pt-10 md:pb-4 pb-3">
        <h1 className="text-[#2f2f2f] md:text-3xl text-lg font-bold font-serif">
          Best sellers
        </h1>
        <p>
          <NavLink
            to="/shop"
            className="bg-[#e99f7d] md:px-4 px-2 md:py-2 py-1 rounded-lg text-white md:text-lg text-sm font-bold">
            View all Products
          </NavLink>
        </p>
      </div>
      <div className="w-full overflow-x-hidden md:mt-10 mt-2 mb-16 px-3">
        <div
          className="flex overflow-x-scroll container mx-auto gap-4"
          style={{ scrollbarWidth: "none" }}>
          {products.map((product) => {
            if (product.bestSeller) {
              return <ProductCard product={product} key={product.id} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
