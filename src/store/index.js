import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { productSlice } from "./products";
import { blogSlice } from "./blogs";
import { recipieSlice } from "./recipe";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    blogs: blogSlice.reducer,
    recipes: recipieSlice.reducer,
  },
});
