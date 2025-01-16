import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./campers/slice.js";

export const store = configureStore({
  reducer: {
    campers: itemsReducer,
    // filters: filtersReducer,
  },
});
