import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartActions from "../store/cart";
import ProductDetailed from "../components/Layout/ProductDeatiled";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);
  const { id } = useParams();
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

  return <ProductDetailed product={product}></ProductDetailed>;
};

export default ProductDetail;
