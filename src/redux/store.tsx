import { configureStore, combineReducers } from "@reduxjs/toolkit";
import headphonesSlice from "./slice/headphonesSlice/headphonesSlice";

const rootReducer = combineReducers({
    headphones: headphonesSlice,
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
