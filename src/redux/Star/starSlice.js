import { createSlice } from "@reduxjs/toolkit";

const starSlice = createSlice({
  name: "star",
  initialState: {
    rating: 0,
  },
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = starSlice.actions;
export default starSlice.reducer;
