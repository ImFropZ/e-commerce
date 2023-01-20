import { productReducer } from "./product/productSlice";
import { userReducer } from "./user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
