import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import { AuthSlice } from "./Slices/AuthSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        auth: AuthSlice.reducer,
    }
});