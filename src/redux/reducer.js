import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isAuth = action.payload.isAuth;
    },
    logOut(state, action) {
      state.isAuth = action.payload.isAuth;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
