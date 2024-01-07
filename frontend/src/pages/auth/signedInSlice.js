import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const signedInSlice = createSlice({
  name: "signedIn",
  initialState,
  reducers: {
    setSignedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSignedIn } = signedInSlice.actions;

export default signedInSlice.reducer;
