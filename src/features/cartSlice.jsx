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
      state.cart.push(action.payload);
    },
    setQuantity: (state, action) => {
      state.quantity = state.quantity + 1;
    },
  },
});

export const { addCart, setQuantity } = cartSlice.actions;
export default cartSlice.reducer;
