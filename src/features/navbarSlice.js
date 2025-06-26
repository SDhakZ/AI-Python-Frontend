// features/navbar/navbarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    title: "",
  },
  reducers: {
    setNavbarTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setNavbarTitle } = navbarSlice.actions;
export default navbarSlice.reducer;
