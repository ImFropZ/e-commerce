import { fetchCategories } from "./../../config/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../config/axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductState {
  loading: boolean;
  data: {
    products: Array<Product>;
    categories: Array<string>;
  };
  error: string;
}

const initialState: ProductState = {
  loading: true,
  data: {
    products: [],
    categories: [],
  },
  error: "",
};

export const initialProducts = createAsyncThunk("product/initProducts", () => {
  return Promise.all([fetchProducts(), fetchCategories()]).then(
    ([products, categories]) => {
      return {
        products,
        categories,
      };
    }
  );
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(initialProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(initialProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(initialProducts.rejected, (state, actions) => {
      state.loading = false;
      state.data = {
        products: [],
        categories: [],
      };
      state.error = actions.error.message || "";
    });
  },
  reducers: {},
});

export const productReducer = productSlice.reducer;
