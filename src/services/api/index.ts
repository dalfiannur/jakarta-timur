import { configureStore } from "@reduxjs/toolkit";
import { statisticApi } from "./statistic";

export const makeStore = () =>
  configureStore({
    reducer: {
      [statisticApi.reducerPath]: statisticApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([statisticApi.middleware]),
  });

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
