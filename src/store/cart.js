import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSimpleItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === newItem.product.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...newItem.product,
          quantity: newItem.quantity || 1,
          selectedOption: 0,
        });
      }
    },

    addProductWithOptionToCart: (state, action) => {
      const newItem = action.payload;
      console.log(newItem.quantity);
      console.log(newItem.selectedOption);
      const existingItem = state.items.find(
        (item) =>
          item.id === newItem.product.id &&
          item.selectedOption === newItem.selectedOption
      );

      if (existingItem) {
        console.log(existingItem);
        existingItem.quantity = newItem.quantity;
        existingItem.selectedOption = newItem.selectedOption;
      } else {
        state.items.push({
          ...newItem.product,
          quantity: newItem.quantity,
          selectedOption: newItem.selectedOption,
        });
      }
    },

    decreaseItemQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else if (existingItem.quantity == 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.quantity += 1;
    },

    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

const cartActions = cartSlice.actions;
export default cartActions;
