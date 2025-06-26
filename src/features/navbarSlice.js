// features/navbar/navbarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    title: "",
    goBack: true,
  },
  reducers: {
    setNavbarTitle: (state, action) => {
      state.title = action.payload;
    },
    setGoBack: (state, action) => {
      state.goBack = action.payload;
    },
  },
});

export const { setNavbarTitle, setGoBack } = navbarSlice.actions;
export default navbarSlice.reducer;
