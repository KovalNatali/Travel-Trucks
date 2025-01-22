import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";
import favoritesReducer from "./favoritesSlice.jsx";

export const store = configureStore({
  reducer: {
    campers: itemsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
