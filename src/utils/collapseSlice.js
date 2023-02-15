import { createSlice } from "@reduxjs/toolkit";

const collapseSlice = createSlice({
  name: "collapse",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = collapseSlice.actions;
export default collapseSlice.reducer;
