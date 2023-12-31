import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  totalPages: "",
  totalResult: "",
  isLoading: false,
  searchedMovies: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchedMovies: (state, action) => {
      state.searchedMovies = action.payload;
    },
    setQueryValue: (state, action) => {
      state.searchQuery = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setTotalResult: (state, action) => {
      state.totalResult = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setSearchedMovies,
  setQueryValue,
  setTotalPages,
  setTotalResult,
  setIsLoading,
} = searchSlice.actions;
export default searchSlice.reducer;
