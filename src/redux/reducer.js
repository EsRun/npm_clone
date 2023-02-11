import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isAuth = action.payload.isAuth;
      state.userName = action.payload.userName;
    },
    logOut(state, action) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
