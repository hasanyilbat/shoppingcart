import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      [...cart, action.payload];
    },

    setQuantity: (state, action) => {
      state.quantity = state.quantity + 1;
    },
  },
});
