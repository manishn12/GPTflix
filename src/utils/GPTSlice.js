import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    moviesResults: null,
    moviesNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPtMovies: (state, action) => {
      const { moviesNames, moviesResults } = action.payload;
      state.moviesNames = moviesNames;
      state.moviesResults = moviesResults;
    },
  },
});

export const { toggleGPTSearchView, addGPtMovies } = GPTSlice.actions;
export default GPTSlice.reducer;
