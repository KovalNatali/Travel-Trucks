import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";
import { fetchCamperById } from "./operations.js";

const INITIAL_STATE = {
  list: [], // List of all campers
  filteredList: [], // Filtered campers
  paginatedCampers: [], // Campers displayed based on pagination
  status: "idle", // idle, loading, succeeded, failed
  error: null,
  page: 1,
  itemsPerPage: 4,
};

const campersSlice = createSlice({
  name: "campers",
  initialState: INITIAL_STATE,
  reducers: {
    setCampers(state, action) {
      state.list = action.payload;
      state.filteredList = action.payload;
      state.page = 1; // Reset page when new data is set
      try {
        state.paginatedCampers = state.filteredList;
        // Initial paginated results
      } catch (error) {
        state.error = error.message;
      }
    },
    setFilteredCampers: (state, action) => {
      const filters = action.payload;
      state.filteredList = state.list.filter((camper) => {
        return (
          (!filters.location ||
            camper.location
              .toLowerCase()
              .includes(filters.location.toLowerCase())) &&
          (!filters.type || camper.form === filters.type) &&
          (!filters.hasAC || camper.AC === filters.hasAC) &&
          (!filters.hasKitchen || camper.kitchen === filters.hasKitchen) &&
          (!filters.hasBathroom || camper.bathroom === filters.hasBathroom) &&
          (!filters.hasTV || camper.TV === filters.hasTV) &&
          (!filters.transmission || camper.transmission === "automatic")
        );
      });
      state.page = 1; // Reset page on new filter
      state.paginatedCampers = state.filteredList; // First page of filtered results
    },
    loadMoreCampers: (state) => {
      state.page += 1;
      const nextItems = state.filteredList.slice(
        0,
        state.page * state.itemsPerPage
      );
      state.paginatedCampers = nextItems;
    },
    resetFilteredList(state) {
      state.filteredList = []; // Reset filteredList to empty array when filters are reset state.list;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.status = "loading";
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.filteredList = action.payload;
        state.page = 1; // Reset page when new data is set
        state.paginatedCampers = state.filteredList;
        state.status = "succeeded";
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "failed";
      }),
});

export const {
  setCampers,
  setFilteredCampers,
  resetFilteredList,
  loadMoreCampers,
} = campersSlice.actions;

export default campersSlice.reducer;
