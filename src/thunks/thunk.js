import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

export const bmi = createAsyncThunk(
  "bmi/predict",
  async ({ values }, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/api/bmi", {
        weight: values.weight,
        height: values.height,
      });
      const { bmi, category } = data;

      return { bmi, category };
    } catch (error) {
      console.log(error.response?.data?.error?.message);
    }
  }
);
