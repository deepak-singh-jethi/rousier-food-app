import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { productSlice } from "./products";
import { blogSlice } from "./blogs";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    blogs: blogSlice.reducer,
  },
});
