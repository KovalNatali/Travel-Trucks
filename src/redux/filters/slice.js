import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    type: "",
    itAC: false,
    itKitchen: false,
    itBathroom: false,
    itTV: false,
    transmission: "",
  },
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setItAC(state, action) {
      state.hasAC = action.payload;
    },
    setItKitchen(state, action) {
      state.hasKitchen = action.payload;
    },
    setItBathroom(state, action) {
      state.hasBathroom = action.payload;
    },
    setItTV(state, action) {
      state.hasTV = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    resetFilters(state) {
      state.location = "";
      state.type = "";
      state.itAC = false;
      state.itKitchen = false;
      state.itBathroom = false;
      state.itTV = false;
      state.transmission = "";
    },
  },
});

export const {
  setLocation,
  setType,
  setItAC,
  setItKitchen,
  setItBathroom,
  setItTV,
  setTransmission,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
