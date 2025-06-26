import { createSlice } from "@reduxjs/toolkit";
import { bmi, predictAndOr } from "../thunks/aiThunk";
const initialState = {
  result: null,
  gateResult: null,
  category: null,
  loading: false,
  gateLoading: false,
};

export const aiSlice = createSlice({
  name: "ai",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bmi.pending, (state) => {
        state.loading = true;
      })
      .addCase(bmi.fulfilled, (state, action) => {
        state.result = action.payload.bmi;
        state.loading = false;
        state.category = action.payload.category;
      })
      .addCase(bmi.rejected, (state, action) => {
        state.bmi = null;
        state.loading = false;
        console.error("Error calculating BMI:", action.error.message);
      })
      .addCase(predictAndOr.pending, (state) => {
        state.gateLoading = true;
      })
      .addCase(predictAndOr.fulfilled, (state, action) => {
        state.gateResult = action.payload.output;
        state.gateLoading = false;
      })
      .addCase(predictAndOr.rejected, (state, action) => {
        state.gateResult = null;
        state.gateLoading = false;
        console.error("Error predicting AND/OR:", action.error.message);
      });
  },
});

// Export actions
export const {} = aiSlice.actions;

// Export reducer (will be used by the store)
export default aiSlice.reducer;
