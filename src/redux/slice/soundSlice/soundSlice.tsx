import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SoundSlice } from "./model";
import { RootState } from "../../store";

const initialState: SoundSlice = {
  allHz: [
    { 250: "" },
    { 500: "" },
    { 1000: "" },
    { 2000: "" },
    { 4000: "" },
    { 8000: "" },
  ],
  allDb: [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80],

  activeHz: "",
  activeDb: "",
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    SET_ACTIVE_HZ: (state, action) => {
        state.activeHz = action.payload;
    },
  },
});

export const { SET_ACTIVE_HZ } = soundSlice.actions;

export const selectedAllHz = (state: RootState) => state.sound.allHz;
export const selectedAllDb = (state: RootState) => state.sound.allDb;
export const selectedActiveHz = (state: RootState) => state.sound.activeHz;
export const selectedActiveDb = (state: RootState) => state.sound.activeDb;

export default soundSlice.reducer;
