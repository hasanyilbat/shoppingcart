import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  productsList: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const { data } = await axios(url);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductList: (state) => {
      state.productsList = [];
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { clearProductList } = productsSlice.actions;

export default productsSlice.reducer;
