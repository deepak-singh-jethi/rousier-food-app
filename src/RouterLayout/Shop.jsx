import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/Layout/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.products);
  return (
    <main className="py-10 w-full text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((product) => {
            return (
              <div key={product.id} className="flex justify-center">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Shop;
