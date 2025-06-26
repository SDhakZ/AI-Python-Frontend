import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import aiReducer from "../features/aiSlice";
import navbarReducer from "../features/navbarSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ai: aiReducer,
    navbar: navbarReducer,
  },
});
