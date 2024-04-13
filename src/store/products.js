import { createSlice } from "@reduxjs/toolkit";
import { products } from "../Data/productsData";

export const productSlice = createSlice({
  initialState: products,
  name: "products",
});
