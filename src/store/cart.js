import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDisplay: (state, action) => {
      state.isCartOpen = !state.isCartOpen;
      console.log(state.isCartOpen);
    },
    addSimpleItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1, selectedOption: 0 });
      }
    },
    addProductWithOptionToCart: (state, action) => {
      const productId = action.payload.product.id;
      const option = action.payload.selectedOption;
      const quantity = action.payload.quantity;

      const existingItem = state.items.find(
        (item) => item.id === productId && option === item.selectedOption
      );

      if (existingItem) {
        existingItem.quantity = parseInt(quantity);
      } else {
        state.items.push({
          ...action.payload.product,
          quantity,
          selectedOption: option,
        });
      }
    },

    // Todo remove from cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity -= 1;
      }
    },

    // todo clear  cart
    clearCart: (state) => {
      state.items = [];
    },
    //  todo remove a perticular item completely from cart
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

const cartActions = cartSlice.actions;
export default cartActions;
