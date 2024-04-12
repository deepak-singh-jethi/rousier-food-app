import React from "react";
import { products } from "../../Data/productsData";
import ProductCard from "../shared/ProductCard";

const BestSeller = () => {
  return (
    <>
      <div className="container mx-auto px-4 flex justify-between pt-20 md:pb-4 pb-3">
        <h1 className="text-[#2f2f2f] md:text-3xl text-lg font-bold font-serif">
          Best sellers
        </h1>
        <p>
          <button className="bg-[#e99f7d] md:px-4 px-2 md:py-2 py-1 rounded-lg text-white md:text-lg text-sm font-bold">
            View all Products
          </button>
        </p>
      </div>
      <div className="w-full overflow-x-hidden md:mt-10 mt-2 mb-40 px-3">
        <div
          className="flex overflow-x-scroll container mx-auto gap-4"
          style={{ scrollbarWidth: "none" }}>
          {products.map((product) => {
            if (product.BestSeller) {
              return <ProductCard product={product} key={product.id} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
