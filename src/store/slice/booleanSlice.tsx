import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpenMenu: false,
  isGrid: true,
};

export const booleanSlice = createSlice({
  name: " boolean",
  initialState,
  reducers: {
    SWITCH_MENU: (state, action) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    SWITCH_GRID: (state, action) => {
      state.isGrid = !state.isGrid;
    },
  },
});
export const { SWITCH_MENU, SWITCH_GRID } = booleanSlice.actions;

export const selectIsOpenMenu = (state: any) => state.boolean.isOpenMenu;
export const selectIsGrid = (state: any) => state.boolean.isGrid;

export default booleanSlice.reducer;
