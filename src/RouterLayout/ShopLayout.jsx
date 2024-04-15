import React from "react";
import { useParams } from "react-router";
import Shop from "../components/Shop";

const ShopLayout = () => {
  const { category } = useParams();
  return <Shop category={category}></Shop>;
};

export default ShopLayout;
