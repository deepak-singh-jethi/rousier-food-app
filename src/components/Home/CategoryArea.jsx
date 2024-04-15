import React from "react";
import { category } from "../../Data/category";
import { NavLink } from "react-router-dom";

const CategoryArea = () => {
  return (
    <div className="pb-10 md:my-24 container sm:mx-auto px-2 ">
      <h1 className="text-center mt-20 mb-10 text-lg sm:text-xl md:text-4xl font-bold font-serif line-before-after">
        Shop By Category
      </h1>
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 ">
          {category.map((item) => (
            <NavLink key={item.category} to={`shop/${item.category}`}>
              <div>
                <img src={item.image} alt={item.title} className="rounded-lg" />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
