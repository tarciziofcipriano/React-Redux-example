import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./actions";

// Cria a store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
