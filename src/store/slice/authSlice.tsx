import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isLoggedIn: boolean,
  email: string | null,
  userName: string | null,
  userID: string | null,
}

const initialState: IInitialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      // console.log(action.payload);
      const { email, userName, userID } = action.payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userID = userID;
    },
    REMOVE_ACTIVE_USER(state, action) {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userID = null;
    },
  },
});

export const { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } = authSlice.actions;

export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectEmail = (state: any) => state.auth.email;
export const selectUserName = (state: any) => state.auth.userName;
export const selectUserID = (state: any) => state.auth.userID;

export default authSlice.reducer;
