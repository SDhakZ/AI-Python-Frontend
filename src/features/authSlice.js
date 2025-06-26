// src/features/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { tokenManager } from "../utils/tokenManager";
import { userManager } from "../utils/userManager";
import { login } from "../thunks/authThunk";

const initialState = {
  usernameError: null,
  passwordError: null,
  loading: false,
  error: null,
};

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ----------------- Dummy login (remove after api integration) ------------------- //

    // ----------------- Dummy login ------------------- //
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      userManager.removeUser();
      tokenManager.removeTokens();
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
      state.usernameError = null;
      state.passwordError = null;
    };
    const handleRejected = (state, action, message) => {
      state.loading = false;
      state.error = action.payload?.error || message;
      state.usernameError = action.payload?.usernameError || null;
      state.passwordError = action.payload?.passwordError || null;
    };
    const handleAuthSuccess = (state, action) => {
      const { user, token } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      userManager.saveUser(user);
      tokenManager.saveTokens({ token });
      state.loading = false;
    };

    builder;
  },
});

export const {
  logout,
  test,
  setLoading,
  checkAuth,
  clearUsernameError,
  clearPasswordError,
} = authSlice.actions;
export default authSlice.reducer;
