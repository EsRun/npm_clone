import { createSlice } from "@reduxjs/toolkit";

// 인증
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    userName: "",
  },
  reducers: {
    logIn(state, action) {
      state.isAuth = action.payload.isAuth;
      state.userName = action.payload.userName;
    },
    logOut(state, action) {
      state.isAuth = false;
      state.userName = "";
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
