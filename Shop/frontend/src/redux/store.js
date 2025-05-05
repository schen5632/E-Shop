import { configureStore } from "@reduxjs/toolkit";
import signedInReducer from "../pages/auth/signedInSlice";
import cartReducer from "../pages/cart/cartSlice";
import productReducer from "../pages/shop/productSlice";
import userReducer from "../pages/auth/userSlice";

export const store = configureStore({
  reducer: {
    signedIn: signedInReducer,
    cart: cartReducer,
    product: productReducer,
    user: userReducer,
  },
});
