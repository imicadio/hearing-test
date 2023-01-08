import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SoundSlice } from "./model";
import { RootState } from "../../store";

const initialState: SoundSlice = {
  allHz: [
    { calibrated: null },
    { 250: null },
    { 500: null },
    { 1000: null },
    { 2000: null },
    { 4000: null },
    { 8000: null },
  ],
  allDb: [-5, 0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80],

  calibratedSoundAnswer: [{ true: "Yes" }, { false: "No" }],

  pageBackward: false,
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    SET_HZ: (state, action) => {
      const { key, value } = action.payload;
      for (const obj of state.allHz) {
        if (key in obj) {
          obj.calibrated = value;
        }
      }
    },

    SET_PAGE_BACKWARD: (state, action) => {
      state.pageBackward = action.payload;
    },
  },
});

export const { SET_HZ, SET_PAGE_BACKWARD } = soundSlice.actions;

export const selectedAllHz = (state: RootState) => state.sound.allHz;
export const selectedAllDb = (state: RootState) => state.sound.allDb;
export const selectedCalibratedSoundAnswer = (state: RootState) =>
  state.sound.calibratedSoundAnswer;
export const selectedPageBackward = (state: RootState) =>
  state.sound.pageBackward;

export default soundSlice.reducer;
