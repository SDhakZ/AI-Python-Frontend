import { createSlice } from "@reduxjs/toolkit";
import { bmi } from "../thunks/thunk";
const initialState = {
  result: null,
  category: null,
  loading: false,
};

export const bmiSlice = createSlice({
  name: "bmi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(bmi.pending, (state) => {
        state.loading = true;
      })
      .addCase(bmi.fulfilled, (state, action) => {
        state.result = action.payload.bmi;
        state.category = action.payload.category;
      })
      .addCase(bmi.rejected, (state, action) => {
        state.bmi = null;
        console.error("Error calculating BMI:", action.error.message);
      });
  },
});

// Export actions
export const {} = bmiSlice.actions;

// Export reducer (will be used by the store)
export default bmiSlice.reducer;
