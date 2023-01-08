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

  activeHz: "",
  activeDb: "",
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

    SET_ACTIVE_HZ: (state, action) => {
      state.activeHz = action.payload;
    },
  },
});

export const { SET_ACTIVE_HZ, SET_HZ } = soundSlice.actions;

export const selectedAllHz = (state: RootState) => state.sound.allHz;
export const selectedAllDb = (state: RootState) => state.sound.allDb;
export const selectedCalibratedSoundAnswer = (state: RootState) =>
  state.sound.calibratedSoundAnswer;
export const selectedActiveHz = (state: RootState) => state.sound.activeHz;
export const selectedActiveDb = (state: RootState) => state.sound.activeDb;

export default soundSlice.reducer;
