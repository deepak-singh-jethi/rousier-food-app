import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./Layout/ProductCard";

const Shop = ({ category = undefined }) => {
  const products = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [category]);

  if (filteredProducts.length === 0) {
    return (
      <h1 className="h-screen w-screen flex justify-center items-center">
        No Products Found
      </h1>
    );
  }

  return (
    <main className="py-10 w-full text-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => {
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
