import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpenMenu: true,
};

export const menuSwitchSlice = createSlice({
  name: "menuSwitch",
  initialState,
  reducers: {
    SWITCH_MENU: (state, action) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
});
export const { SWITCH_MENU } = menuSwitchSlice.actions;

export const selectIsOpenMenu = (state: any) => state.menuSwitch.isOpenMenu;

export default menuSwitchSlice.reducer;
