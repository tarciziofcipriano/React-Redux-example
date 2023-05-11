import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./types";

// Actions de adicionar e remover um item
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    remove: (state) => {
      state.value -= 1;
    },
    moreItens: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      },
  },
});

// Seletor que permite selecionar os valores do counterSlice
export const selectCount = (state: RootState) => state.counter.value;
