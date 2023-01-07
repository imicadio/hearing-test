import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headphonesSlice from "./slice/headphonesSlice/headphonesSlice";
import soundSlice from "./slice/soundSlice/soundSlice";

const rootReducer = combineReducers({
  headphones: headphonesSlice,
  sound: soundSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
