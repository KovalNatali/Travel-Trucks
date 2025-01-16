import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "catalog/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/campers");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
