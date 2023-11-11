import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currenciesStats: [],
};

const cryptoSlice = createSlice({
  name: "cryptoCurrencies",
  initialState,
  reducers: {
    setCryptoCurrenciesStats(state, action) {
      state.currenciesStats = action.payload;
    },
  },
});

export default cryptoSlice.reducer;
export const cryptoActions = cryptoSlice.actions;
