import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "items",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  //   .addCase(addContact.pending, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(addContact.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.error = false;
  //     state.items.push(action.payload);
  //   })
  //   .addCase(addContact.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   })
  //   .addCase(deleteContact.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(deleteContact.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.error = false;
  //     const index = state.items.findIndex(
  //       (task) => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   })
  //   .addCase(deleteContact.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   }),
  // .addCase(logOut.fulfilled, (state) => {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // }),
  // .addCase(logOut.fulfilled, () => INITIAL_STATE),
});

export const itemsReducer = catalogSlice.reducer;
