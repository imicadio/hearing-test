import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeadphonesSlice } from "./model";
import { RootState } from "../../store";

const initialState: HeadphonesSlice = {
  allHeadphones: [
    { "on-ear-cables": "On-Ear, cables" },
    { "in-ear-cables": "In-Ear, cables" },
    { "on-ear-wireless": "On-Ear, wireless" },
    { "in-ear-wireless": "In-Ear, wireless" },
  ],

  selected: "",
};

const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  reducers: {
    SET_HEADPHONES: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { SET_HEADPHONES } = headphonesSlice.actions;

export const selectedAllHeadphones = (state: RootState) =>
  state.headphones.allHeadphones;
export const selectedHeadphones = (state: RootState) =>
  state.headphones.selected;

export default headphonesSlice.reducer;
