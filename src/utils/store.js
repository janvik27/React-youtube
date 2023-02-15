import { configureStore } from "@reduxjs/toolkit";
import collapseSlice from "./collapseSlice";

const myStore = configureStore({
  reducer: {
    collapse: collapseSlice,
  },
});

export default myStore;
