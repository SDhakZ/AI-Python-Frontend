import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";

export const bmi = createAsyncThunk(
  "bmi/predict",
  async ({ values }, { rejectWithValue }) => {
    const heightinMeters = values.height / 100; // Convert height from cm to meters
    try {
      const { data } = await api.post("/api/predict/bmi", {
        weight: values.weight,
        height: heightinMeters,
      });
      const { bmi, category } = data;

      return { bmi, category };
    } catch (error) {
      console.log(error.response?.data?.error?.message);
    }
  }
);

export const predictAndOr = createAsyncThunk(
  "bmi/perceptronGate",
  async ({ values, gate }, { rejectWithValue }) => {
    try {
      const { data } = await api.post(
        `/api/predict/perceptronGate?gate=${gate}`,
        {
          a: values.a,
          b: values.b,
        }
      );
      const { output } = data;

      return { output };
    } catch (error) {
      console.log(error.response?.data?.error?.message);
      return rejectWithValue(error.response?.data?.error?.message);
    }
  }
);
