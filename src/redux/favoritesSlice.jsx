import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: initialFavorites,
  },
  reducers: {
    addToFavorites(state, action) {
      state.list.push(action.payload);
      // Записуємо оновлений список в localStorage
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
    removeFromFavorites(state, action) {
      state.list = state.list.filter((el) => el !== action.payload);
      // Записуємо оновлений список в localStorage
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
