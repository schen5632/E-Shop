import { createSlice } from "@reduxjs/toolkit";

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 100; i++) {
    cart[i] = 0;
  }
  return cart;
};

const initialState = {
  value: getDefaultCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.value = action.payload;
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.value[action.payload]) {
        state.value = { ...state.value, [itemId]: 1 };
      } else {
        state.value = { ...state.value, [itemId]: state.value[itemId] + 1 };
      }
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
