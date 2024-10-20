import { configureStore } from "@reduxjs/toolkit";
import global from "./global";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    global,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
