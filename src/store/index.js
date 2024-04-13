import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart";
import { productSlice } from "./products";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
  },
});
