import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import bmiReducer from "../features/bmiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    bmi: bmiReducer,
  },
});
